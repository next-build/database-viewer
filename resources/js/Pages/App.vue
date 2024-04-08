<template>
    <Sidebar 
        @selectTable="(x, y) => {
            database = x;
            table = y;
            handleLoadTable();
        }"
    />
    <div class="lg:pl-72">
        <!-- <Header /> -->

        <main class="py-2">
            <div class="px-4 sm:px-6 lg:px-8">

                <!--Table-->
                <div 
                    v-if="tableData.columns.length !== 0"
                >
                    <Table
                        :columns="tableData.columns"
                        :records="tableData.records"
                        @paginate="(page) => handleLoadTable(page)"
                        @perPage="(paginate) => handleLoadTable(null, paginate)"
                        @filterQuery="(filter) => handleLoadTable(null, null, filter)"
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

const handleLoadTable = async (page, paginate, filter) => {
    const data = await fetchDatabaseTable(database.value, table.value, page, paginate, filter);
    if (data.length !== 0) {
        tableData.value.columns = data.columns;
        tableData.value.records = data.records;
    }
}
</script>
