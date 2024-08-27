<template>

    <Drawer />

    <div class="flex pt-2">

        <div class="flex-1 flex gap-4">

            <!--Sidebar Visibility-->
            <button 
                type="button"
                class="rounded-md bg-gray-800 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                @click="() => emit('updateSidebarOpen', sidebarOpen)"
            >
                <svg 
                    v-if="sidebarOpen"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 lucide lucide-chevron-left"
                >
                    <path d="m15 18-6-6 6-6"/>
                </svg>
                <svg 
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 lucide lucide-chevron-right"
                >
                    <path d="m9 18 6-6-6-6"/>
                </svg>
            </button>

            <!--Table Refresh-->
            <button 
                type="button"
                class="rounded-md bg-gray-800 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                @click="emit('recall', null, perPageDataLimit, filter, sort)"
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                    class="w-5 h-5 lucide lucide-rotate-cw"
                >
                    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/>
                </svg>
            </button>

        </div>

        <div class="flex-1 flex flex-row-reverse items-center gap-4">

            <DropDown class="block md:hidden" :items="dropDownItems">
                
                <template #toggle>
                    <button 
                        type="button"
                        class="rounded-md bg-gray-800 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                            class="w-5 h-5 lucide lucide-align-justify"
                        >
                            <line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/>
                        </svg>
                    </button>
                </template>

                <template #columns_visibility="{ data, active }">
                    <button 
                        @click="isColumnsVisibility =! isColumnsVisibility"
                        :class="[
                            active ? 'bg-violet-500 text-white' : 'text-gray-900',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]"
                    >
                        {{ data.label }}
                    </button>
                </template>

                <template #sort_columns="{ data, active }">
                    <button 
                        @click="isSortColumns =! isSortColumns"
                        :class="[
                            active ? 'bg-violet-500 text-white' : 'text-gray-900',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]"
                    >
                        {{ data.label }}
                    </button>
                </template>

                <template #advance_search="{ data, active }">
                    <button 
                        @click="isAdvanceSearch =! isAdvanceSearch"
                        :class="[
                            active ? 'bg-violet-500 text-white' : 'text-gray-900',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]"
                    >
                        {{ data.label }}
                    </button>
                </template>

            </DropDown>

            <!--Pagination-->
            <div class="">
                <div class="relative rounded-md shadow-sm">
                    <select id="perpage" name="perpage"
                        class="appearance-none block w-full rounded-md border-0 py-3 pl-3 pr-10 text-black ring-1 ring-inset ring-gray-300 text-sm sm:leading-6"
                        @change="(e) => {
                            perPageDataLimit = e.target.value;
                            emit('recall', null, perPageDataLimit, filter, sort);
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
            
            <button 
                type="button"
                class="hidden md:block rounded-md bg-gray-800 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                @click="isColumnsVisibility =! isColumnsVisibility"
            >
                Columns Visibility
            </button>

            <button 
                type="button"
                class="hidden md:block rounded-md bg-gray-800 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                @click="isSortColumns =! isSortColumns"
            >
                Sort Columns
            </button>

            <button 
                type="button"
                class="hidden md:block rounded-md bg-gray-800 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                @click="isAdvanceSearch =! isAdvanceSearch"
            >
                Advance Search
            </button>

        </div>

    </div>

    <!--Filter-->
    <!-- <div class="flex flex-row-reverse gap-4 items-center pt-2"></div> -->

    <!--Table-->
    <div class="overflow-x-auto table-scrollbar mt-4">
        <table class="mb-4" :style="{ width: 'max-content', minWidth: '100%' }">
            <thead>
                <tr>
                    <th v-for="(header, index) in columns.filter(item => item.visibility === true)" :key="index"
                        class="px-4 py-2 bg-gray-200 border border-gray-300">
                        <!-- <div
                            class="resize-handle absolute top-0 bottom-0 right-0 w-4 bg-gray-400 hover:bg-gray-500 cursor-col-resize"
                        ></div> -->
                        {{ header.label }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, rowIndex) in props.records.data" :key="rowIndex" class="hover:bg-gray-100">
                    <td v-for="(column, columnIndex) in columns.filter(item => item.visibility === true)" :key="columnIndex" class="px-4 py-2 border border-gray-300">
                        <div class="truncate max-w-52">
                            {{ row[column.label] }}
                        </div>
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
                            emit('recall', page, perPageDataLimit, filter, sort);
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
                <button v-for="(link, index) in paginationLinks.prevLinks" :key="index"
                    @click="() => {
                        emit('recall', link.label, perPageDataLimit, filter, sort);
                    }"
                    :class="[props.records.current_page == link.label ? 'border-indigo-500 text-indigo-600 border-t-2 cursor-not-allowed' : 'border-t-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 cursor-pointer']"
                    class="inline-flex items-center px-4 pt-4 text-sm font-medium"
                >
                    {{ link.label }}
                </button>
                <button v-for="(link, index) in paginationLinks.nextLinks" :key="index"
                    @click="() => {
                        emit('recall', link.label, perPageDataLimit, filter, sort);
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
                            emit('recall', page, perPageDataLimit, filter, sort);
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

    <!--Search Drawer-->
    <Drawer 
        v-model="isAdvanceSearch"
        title="Advance Search"
    >
        <div class="flex flex-col gap-4">
            <div class="">
                <div class="relative rounded-md shadow-sm">
                    <select id="operator" name="operator"
                        class="appearance-none block w-full rounded-md border-0 py-2.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2"
                        @change="(e) => {
                            filter.operator = e.target.value;
                        }"
                    >
                        <option :selected="filter.operator === null" disabled>Select Operator</option>
                        <option 
                            v-for="value in operators" :key="value"
                            :selected="value == filter.operator"
                        >
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
                        <option :selected="filter.column === null" disabled>Select Column</option>
                        <option 
                            v-for="(column, index) in props.columns" :key="index"
                            :selected="column == filter.column"
                        >
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
                    placeholder="Keyword..."
                    @input="(e) => filter.query = e.target.value"
                    :value="filter.query"
                >
            </div>

            <div class="flex flex-row gap-2">
                <button 
                    type="button"
                    class="flex-1 rounded-md bg-gray-800 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    @click="emit('recall', null, perPageDataLimit, filter, sort)"
                >
                    Search
                </button>
                <button 
                    class="flex-1 border-2 border-black p-1 rounded-md hover:bg-red-500 hover:text-white"
                    @click="() => {
                        filter = clearObject(filter);
                        emit('recall', null, perPageDataLimit, filter, sort);
                    }"
                >
                    <!-- <XCircleIcon class="w-7 h-7" /> -->
                    Clear
                </button>
            </div>
        </div>
    </Drawer>


    <!--Sort Drawer-->
    <Drawer 
        v-model="isSortColumns"
        title="Sort Columns"
    >
        <div class="flex flex-col gap-4">

            <div class="">
                <div class="relative rounded-md shadow-sm">
                    <select id="column" name="column"
                        class="appearance-none block w-full rounded-md border-0 py-2.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2"
                        @change="(e) => {
                            sort.column = e.target.value;
                        }"
                    >
                        <option :selected="sort.column === null" disabled>Select Column</option>
                        <option 
                            v-for="(column, index) in props.columns" :key="index"
                            :selected="column == sort.column"
                        >
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
                <div class="relative rounded-md shadow-sm">
                    <select id="order" name="order"
                        class="appearance-none block w-full rounded-md border-0 py-2.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2"
                        @change="(e) => {
                            sort.order = e.target.value;
                        }"
                    >
                        <option :selected="sort.order === null" disabled>Select Order</option>
                        <option v-for="value in ['ASC', 'DESC']" :key="value" :selected="value == sort.order">
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

            <div class="flex flex-row gap-2">
                <button 
                    type="button"
                    class="flex-1 rounded-md bg-gray-800 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    @click="emit('recall', null, perPageDataLimit, filter, sort)"
                >
                    Sort
                </button>
                <button 
                    class="flex-1 border-2 border-black p-1 rounded-md hover:bg-red-500 hover:text-white"
                    @click="(e) => {
                        sort = clearObject(sort);
                        emit('recall', null, perPageDataLimit, filter, sort);
                    }"
                >
                    <!-- <XCircleIcon class="w-7 h-7" /> -->
                    Clear
                </button>
            </div>
        </div>
    </Drawer>

    <!--Columns Visibility-->
    <Drawer 
        v-model="isColumnsVisibility"
        title="Sort Columns"
    >
        <div class="flex flex-col gap-4">

            <div 
                v-for="(column, index) in columns" :key="index"
                class="flex p-3 rounded-md border-2 cursor-pointer hover:bg-gray-100"
                @click="() => column.visibility =! column.visibility"
            >
                <div class="flex-1">
                    {{ column.label }}
                </div>
                <div class="flex-2">
                    <svg v-if="column.visibility" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                </div>
            </div>
            
        </div>
    </Drawer>

</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/vue/20/solid";
import { ArrowsRightLeftIcon, XCircleIcon } from "@heroicons/vue/24/outline";
import { getParamsFromUrl, clearObject } from '../../Utils/common';
import Drawer from '../../Components/Drawer';
import DropDown from '../../Components/DropDown';

const props = defineProps({
    columns: Array,
    records: Object,
    sidebarOpen: Boolean,
});

const columns = ref([]);
const modifyColumns = () => {
    props.columns.forEach(column => {
        columns.value.push({
            label: column,
            visibility: true,
        })
    });
};

const operators = ['=', '!=', '>', '>=', '<', '<='];

const perPageDataLimit = ref(null);

const filter = ref({
    operator: null,
    column: null,
    query: null,
});

const sort = ref({
    column: null,
    order: null,
})

const paginationLinks = computed(() => {
    const links = props.records.links.slice(1, -1);
    return {
        prevLinks: links.slice(0, links.lenght - 3),
        nextLinks: links.slice(-(links.lenght - 3)),
    };
});

const isAdvanceSearch = ref(false);
const isSortColumns = ref(false);
const isColumnsVisibility = ref(false);

const dropDownItems = [
    { label: 'Advance Search', key: 'advance_search' },
    { label: 'Sort Columns', key: 'sort_columns' },
    { label: 'Columns Visibility', key: 'columns_visibility' },
];

const emit = defineEmits(["recall", "updateSidebarOpen"]);

onMounted(() => {
    modifyColumns()
});
</script>

<style scoped>
/* Scrollbar */
.table-scrollbar::-webkit-scrollbar {
    width: 2px;
}

/* Track */
.table-scrollbar::-webkit-scrollbar-track {
    background: #f4f0f0;
    box-shadow: inset 0 0 5px rgb(208, 208, 208);
    border-radius: 6px;
}

/* Handle */
.table-scrollbar::-webkit-scrollbar-thumb {
    background: #d5d2d2;
    border-radius: 6px;
}
</style>
