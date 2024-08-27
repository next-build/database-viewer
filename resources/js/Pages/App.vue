<template>
    <Sidebar 
        v-if="tableRef?.isSidebar === undefine || tableRef?.isSidebar === true"
        @selectTable="(selectedDatabase, selectedTable) => {
            database = selectedDatabase;
            table = selectedTable;
            handleLoadTable();
        }"
    />
    <div :class="[(tableRef?.isSidebar === undefine || tableRef?.isSidebar === true) && 'lg:pl-72']">

        <main class="py-2">
            <div class="px-4 sm:px-6 lg:px-8">

                <!--Table-->
                <div 
                    v-if="tableData.columns.length !== 0"
                >
                    <Table
                        ref="tableRef"
                        :key="tableKey"
                        :columns="tableData.columns"
                        :records="tableData.records"
                        @recall="handleLoadTable"
                    />
                </div>

                <!--Default-->
                <div v-else class="flex justify-center items-center mt-16">
                    <span class="text-xl md:text-3xl font-medium">
                        Select database & table from sidebar to view data 🤘
                    </span>
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

const tableRef = ref();
const tableKey = ref(0);
const isTableLoading = ref(false);

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
