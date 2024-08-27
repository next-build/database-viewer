<template>
    <Sidebar 
        @selectTable="(selectedDatabase, selectedTable) => {
            database = selectedDatabase;
            table = selectedTable;
            handleLoadTable();
        }"
        :sidebarOpen="sidebarOpen"
        @updateSidebarOpen="(state) => {
            sidebarOpen = !state
        }"
    />
    <div :class="[(sidebarOpen === true) && 'lg:pl-72']">

        <main class="py-2">
            <div class="px-4 sm:px-6 lg:px-8">

                <!--Table-->
                <div 
                    v-if="tableData.columns.length !== 0"
                >
                    <Table
                        :key="tableKey"
                        :columns="tableData.columns"
                        :records="tableData.records"
                        @recall="handleLoadTable"
                        :sidebarOpen="sidebarOpen"
                        @updateSidebarOpen="(state) => {
                            sidebarOpen = !state
                        }"
                    />
                </div>

                <!--Default-->
                <div v-else class="flex flex-col gap-4 justify-center items-center mt-16">
                    <span class="text-2xl md:text-3xl font-medium text-center">
                        Select database & table from sidebar to view data 🤘
                    </span>
                    <button 
                        type="button"
                        class="block md:hidden rounded-md bg-gray-800 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                        @click="sidebarOpen = !sidebarOpen"
                    >
                        Select Database & Table
                    </button>
                </div>

            </div>
        </main>

        <!--Loader-->
        <LoadingDialog 
            :loading="isTableLoading"
        />
        
    </div>
</template>
<script setup>
import { ref } from 'vue';
import Sidebar from '../Layouts/Sidebar';
import Table from './Partials/Table';
import LoadingDialog from '../Components/LoadingDialog';
import { fetchDatabaseTable } from '../Utils/api';

const database = ref(null);
const table = ref(null);

const tableData = ref({
    columns: [],
    records: []
});

const tableKey = ref(0);
const isTableLoading = ref(false);
const sidebarOpen = ref(true);

const handleLoadTable = async (page, paginate, filter, sort) => {
    isTableLoading.value = true;
    const data = await fetchDatabaseTable(database.value, table.value, page, paginate, filter, sort);
    if (data.length !== 0) {
        tableData.value.columns = data.columns;
        tableData.value.records = data.records;
    }
    tableKey.value += 1;
    isTableLoading.value = false;
}
</script>
