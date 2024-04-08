<template>
    <!--Filter-->
    <div class="flex flex-row gap-4 items-center pt-2">

        <div class="flex-1 flex flex-row gap-4 items-center">
            <div class="">
                <div class="relative rounded-md shadow-sm">
                    <select id="operator" name="operator"
                        class="appearance-none block w-full rounded-md border-0 py-2.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2"
                        @change="(e) => {
                            filter.operator = e.target.value;
                        }"
                    >
                        <option selected disabled>Select Operator</option>
                        <option v-for="value in operators" :key="value">
                            {{ value }}
                        </option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 rotate-90">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </div>

            <div class="">
                <div class="relative rounded-md shadow-sm">
                    <select id="column" name="column"
                        class="appearance-none block w-full rounded-md border-0 py-2.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2"
                        @change="(e) => {
                            filter.column = e.target.value;
                        }"
                    >
                        <option selected disabled>Select Column</option>
                        <option v-for="(column, index) in props.columns">
                            {{ column }}
                        </option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 rotate-90">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </div>

            <div class="">
                <input type="text" name="query" id="query" autocomplete="false"
                    class="block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                    placeholder="Search.."
                    @input="(e) => filter.query = e.target.value"
                >
            </div>

            <div class="">
                <button 
                    type="button"
                    class="rounded-md bg-gray-800 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    @click="emit('filterQuery',  filter)"
                >
                    Filter
                </button>
            </div>
        </div>

        <div class="">
            <div class="relative rounded-md shadow-sm">
                <select id="perpage" name="perpage"
                    class="appearance-none block w-full rounded-md border-0 py-2.5 pl-3 pr-10 text-black ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    @change="(e) => {
                        emit('perPage', e.target.value);
                    }"
                >
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                    <option>100</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 rotate-90">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>
        </div>

    </div>

    <div class="overflow-x-auto table-scrollbar mt-4">
        <table class="mb-4" :style="{ width: 'max-content', minWidth: '100%' }">
            <thead>
                <tr>
                    <th v-for="(header, index) in props.columns" :key="index"
                        class="px-4 py-2 bg-gray-200 border border-gray-300" :style="{ width: 150 + 'px' }">
                        <!-- <div
                            class="resize-handle absolute top-0 bottom-0 right-0 w-4 bg-gray-400 hover:bg-gray-500 cursor-col-resize"
                        ></div> -->
                        {{ header }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, rowIndex) in props.records.data" :key="rowIndex">
                    <td v-for="(cell, cellIndex) in row" :key="cellIndex" class="px-4 py-2 border border-gray-300">
                        {{ cell }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <!--Pagination-->
    <div class="mt-8">
        <nav class="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
            <div class="-mt-px flex w-0 flex-1">
                <button 
                    @click="() => {
                        if (props.records.prev_page_url) {
                            const page = getParamsFromUrl(
                                props.records.prev_page_url,
                                'page'
                            );
                            emit('paginate', page);
                        }
                    }" 
                    :class="[props.records.prev_page_url ? 'cursor-pointer' : 'cursor-not-allowed']"
                    class="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                    <ArrowLongLeftIcon class="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                    Previous
                </button>
            </div>
            <div class="hidden md:-mt-px md:flex">
                <button v-for="link in paginationLinks.prevLinks" 
                    @click="() => {
                        emit('paginate', link.label);
                    }"
                    :class="[props.records.current_page == link.label ? 'border-indigo-500 text-indigo-600 border-t-2 cursor-not-allowed' : 'border-t-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 cursor-pointer']"
                    class="inline-flex items-center px-4 pt-4 text-sm font-medium"
                >
                    {{ link.label }}
                </button>
                <button v-for="link in paginationLinks.nextLinks" 
                    @click="() => {
                        emit('paginate', link.label);
                    }"
                    :class="[props.records.current_page == link.label ? 'border-indigo-500 text-indigo-600 border-t-2 cursor-not-allowed' : 'border-t-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 cursor-pointer']"
                    class="inline-flex items-center px-4 pt-4 text-sm font-medium"
                >
                    {{ link.label }}
                </button>
            </div>
            <div class="-mt-px flex w-0 flex-1 justify-end">
                <button 
                    @click="() => {
                        if (props.records.next_page_url) {
                            const page = getParamsFromUrl(
                                props.records.next_page_url,
                                'page'
                            );
                            emit('paginate', page);
                        }
                    }"
                    :class="[props.records.next_page_url ? 'cursor-pointer' : 'cursor-not-allowed']"
                    class="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 cursor-pointer"
                >
                    Next
                    <ArrowLongRightIcon class="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                </button>
            </div>
        </nav>
    </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/vue/20/solid";

const props = defineProps({
    columns: Array,
    records: Object,
});

const emit = defineEmits(["paginate", "perPage","filterQuery"]);

const operators = ['=', '!=', '>', '>=', '<', '<='];

const perPage = ref(null);
const filter = ref({
    operator: null,
    column: null,
    query: null,
});

const paginationLinks = computed(() => {
    const links = props.records.links.slice(1, -1);
    return {
        prevLinks: links.slice(0, links.lenght - 3),
        nextLinks: links.slice(-(links.lenght - 3)),
    };
});

const getParamsFromUrl = (url, param) => {
    const formattedUri = new URL(url);
    let params = new URLSearchParams(formattedUri.search);
    return params.get(param);
};
</script>

<style scoped>
/**th {
  position: relative;
}

.resize-handle {
  position: absolute;
  top: 0;
  bottom: 0;
  right: -2px;
  width: 4px;
  background-color: #ccc;
  cursor: col-resize;
  user-select: none;
  touch-action: none;
}

.resize-handle:hover {
  background-color: #888;
} */

.table-scrollbar::-webkit-scrollbar {
    width: 4px;
}

/* Track */
.table-scrollbar::-webkit-scrollbar-track {
    background: #f1f1f1;
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
}

/* Handle */
.table-scrollbar::-webkit-scrollbar-thumb {
    background: #c9c9c9;
    border-radius: 10px;
}

/* Handle on hover */
/* ::-webkit-scrollbar-thumb:hover {
    background: #868686;
    border-radius: 10px;
} */
</style>
