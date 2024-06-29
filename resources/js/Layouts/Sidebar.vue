<template>
    <TransitionRoot as="template" :show="sidebarOpen">
        <Dialog
            as="div"
            class="relative z-50 lg:hidden"
            @close="sidebarOpen = false"
        >
            <TransitionChild
                as="template"
                enter="transition-opacity ease-linear duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <div class="fixed inset-0 bg-gray-900/80" />
            </TransitionChild>

            <div class="fixed inset-0 flex">
                <TransitionChild
                    as="template"
                    enter="transition ease-in-out duration-300 transform"
                    enter-from="-translate-x-full"
                    enter-to="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leave-from="translate-x-0"
                    leave-to="-translate-x-full"
                >
                    <DialogPanel
                        class="relative mr-16 flex w-full max-w-xs flex-1"
                    >
                        <TransitionChild
                            as="template"
                            enter="ease-in-out duration-300"
                            enter-from="opacity-0"
                            enter-to="opacity-100"
                            leave="ease-in-out duration-300"
                            leave-from="opacity-100"
                            leave-to="opacity-0"
                        >
                            <div
                                class="absolute left-full top-0 flex w-16 justify-center pt-5"
                            >
                                <button
                                    type="button"
                                    class="-m-2.5 p-2.5"
                                    @click="sidebarOpen = false"
                                >
                                    <span class="sr-only">Close sidebar</span>
                                    <XMarkIcon
                                        class="h-6 w-6 text-white"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>
                        </TransitionChild>
                        <!-- Sidebar component, swap this element with another sidebar if you like -->
                        <div
                            class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10"
                        >
                            <div class="flex h-16 shrink-0 items-center">
                                <img
                                    class="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                    alt="Your Company"
                                />
                            </div>
                            <nav class="flex flex-1 flex-col">
                                <ul
                                    role="list"
                                    class="flex flex-1 flex-col gap-y-7"
                                >
                                    <li>
                                        <ul role="list" class="-mx-2 space-y-1">
                                            
                                            <li
                                                v-for="item in tables"
                                                :key="item.name"
                                            >
                                                <a
                                                    :href="item.href"
                                                    :class="[
                                                        item.current
                                                            ? 'bg-gray-800 text-white'
                                                            : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                                                    ]"
                                                >
                                                    <component
                                                        :is="item.icon"
                                                        class="h-6 w-6 shrink-0"
                                                        aria-hidden="true"
                                                    />
                                                    {{ item.name }}
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="mt-auto">
                                        <a
                                            href="#"
                                            class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                                        >
                                            <Cog6ToothIcon
                                                class="h-6 w-6 shrink-0"
                                                aria-hidden="true"
                                            />
                                            Settings
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </DialogPanel>
                </TransitionChild>
            </div>
        </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div
        class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col"
    >
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div
            class="flex grow flex-col gap-y-5  bg-gray-900 px-6 pb-4"
        >
            <div class="flex h-16 shrink-0 items-center -mx-2">
                <span class="text-2xl font-medium text-white">Database Viewer</span>
            </div>

            <nav class="flex flex-col gap-6">
                
                <!--Database Dropdown-->
                <div class="-mx-2">
                    <span class="text-lg font-semibold leading-6 text-white">
                        Database
                    </span>
                    <!-- <div class="border border-gray-400 mt-2 rounded">
                        <select 
                            class="appearance-none block w-full rounded border-0 py-2 pl-2 pr-10 ring-inherit bg-transparent text-white font-semibold text-base"
                            @change="(e) => {
                                selectedDatabase = e.target.value;
                                handleTables(e.target.value);
                            }"
                        >
                            <option class="text-lg text-gray-400" selected disabled>
                                Select Database
                            </option>
                            <option 
                                class="text-lg text-gray-900" 
                                v-for="(database, index) in databases" :key="index"
                            >
                                {{ database }}
                            </option>
                        </select>
                    </div> -->

                    <div class="mt-2">
                        <div class="relative rounded-md shadow-sm">
                            <select id="column" name="column"
                                class="appearance-none block w-full rounded-md py-2.5 pl-3 pr-10 text-white text-md bg-transparent ring-1 ring-gray-400"
                                @change="(e) => {
                                    selectedDatabase = e.target.value;
                                    handleTables(e.target.value);
                                }"
                            >
                                <option class="text-md text-gray-400" selected disabled>
                                    Select Database
                                </option>
                                <option 
                                    class="text-md text-gray-900" 
                                    v-for="(database, index) in databases" :key="index"
                                >
                                    {{ database }}
                                </option>
                            </select>
                            <div class="text-white pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 rotate-90">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </div>
                    </div>


                </div>

                <div v-if="selectedDatabase" class="-mx-2">

                    <span class="text-lg font-semibold leading-6 text-white">
                        Tables
                    </span>

                    <input 
                        type="text" name="table" id="table"
                        class="mt-2 mb-4 block w-full rounded-md border border-gray-400 py-2 bg-transparent focus:bg-gray-800 p-2 text-md text-white focus:text-white shadow-sm placeholder:text-base placeholder:text-gray-500"
                        placeholder="Search Table"
                        @input="(e) => {
                            tableSearch = e.target.value
                        }"
                        :autocomplete="false"
                    />

                    <div class="h-screen overflow-auto navigation-scroller mt-2">
                        <ul role="list" class="flex flex-1 flex-col mt-2 mr-2 gap-y-7 mb-44">
                            <li>
                                <ul role="list" class="space-y-4">
                                    <li 
                                        v-for="(table, index) in tableSearch ? tables.filter(x => x.toLowerCase().includes(tableSearch.toLowerCase())) : tables" 
                                        :key="index"
                                    >
                                        <a
                                            @click="() => {
                                                selectedTable = table;
                                                emit('selectTable', selectedDatabase, table);
                                            }"
                                            :class="[
                                                selectedTable == table
                                                    ? 'bg-gray-800 text-white'
                                                    : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                                'border border-gray-400 group flex gap-x-3 rounded-md p-2 text-md leading-6 cursor-pointer',
                                            ]"
                                        >
                                            <!-- <component
                                                :is="item.icon"
                                                class="h-6 w-6 shrink-0"
                                                aria-hidden="true"
                                            /> -->
                                            {{ table }}
                                        </a>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>

            </nav>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import {
    Dialog,
    DialogPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
} from "@headlessui/vue";
import {
    Bars3Icon,
    BellIcon,
    CalendarIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
} from "@heroicons/vue/24/outline";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import { fetchDatabases, fetchTables } from '../Utils/api';

import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

const emit = defineEmits(['selectTable']);

const tables = ref([]);
const databases = ref([]);

const selectedDatabase = ref(null);
const selectedTable = ref(null);

const tableSearch = ref(null);

const sidebarOpen = ref(true);

const handleTables = async (database) => {
    tables.value = [];
    const data = await fetchTables(database);
    tables.value = data.tables;
}

onMounted( async () => {

    // Fetch databases
    const data = await fetchDatabases();
    databases.value = data.databases;

});
</script>

<style scoped>
/* width */
.navigation-scroller::-webkit-scrollbar {
    width: 2px;
}

/* Track */
.navigation-scroller::-webkit-scrollbar-track {
    background: #b0b0b0;
    border-radius: 4px;
}

/* Handle */
.navigation-scroller::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
}

/* Handle on hover */
.navigation-scroller::-webkit-scrollbar-thumb:hover {
    background: #555;
}

/* .select-arrow {
    
}

.select-arrow::after {
    content: '\25BC';
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    font-size: 12px;
    color: #333;
} */
</style>
