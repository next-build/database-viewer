<template>
    <Sidebar 
        v-if="tableRef?.isSidebar === undefine || tableRef?.isSidebar === true"
        @selectTable="(x, y) => {
            database = x;
            table = y;
            handleLoadTable();
        }"
    />
    <div :class="[(tableRef?.isSidebar === undefine || tableRef?.isSidebar === true) && 'lg:pl-72']">
        <!-- <Header /> -->

        <main class="py-2">
            <div class="px-4 sm:px-6 lg:px-8">

                <!--Table-->
                <div 
                    v-if="tableData.columns.length !== 0 && isTableLoading === false"
                >
                    <Table
                        ref="tableRef"
                        :columns="tableData.columns"
                        :records="tableData.records"
                        @recall="handleLoadTable"
                    />
                </div>

                <!--Loading-->
                <div v-else-if="isTableLoading === true" class="flex justify-center items-center mt-16">
                    <span class="text-xl md:text-3xl font-medium">
                        Loading...
                    </span>
                </div>

                <!--Default-->
                <div v-else class="flex justify-center items-center mt-16">
                    <span class="text-xl md:text-3xl font-medium">
                        Select database & table from sidebar to view data 🤘
                    </span>
                </div>

            </div>
        </main>
        
    </div>
</template>
<script setup>
import { ref } from 'vue';
import Header from '../Layouts/Header';
import Sidebar from '../Layouts/Sidebar';
import Table from './Partials/Table';
import { fetchDatabaseTable } from '../Utils/api';

const database = ref(null);
const table = ref(null);

const tableData = ref({
    columns: [],
    records: []
});

const isTableLoading = ref(false);

const handleLoadTable = async (page, paginate, filter, sort) => {
    isTableLoading.value = true;
    const data = await fetchDatabaseTable(database.value, table.value, page, paginate, filter, sort);
    if (data.length !== 0) {
        tableData.value.columns = data.columns;
        tableData.value.records = data.records;
    }
    isTableLoading.value = false;
}

const tableRef = ref();
</script>
