<template>
    <div class="overflow-x-auto">
        <table :style="{ width: 'max-content' }">
            <thead>
                <tr>
                    <th
                        v-for="(header, index) in props.columns"
                        :key="index"
                        class="px-4 py-2 bg-gray-200 border border-gray-300"
                        :style="{ width: 150 + 'px' }"
                    >
                        <div
                            class="resize-handle absolute top-0 bottom-0 right-0 w-4 bg-gray-400 hover:bg-gray-500 cursor-col-resize"

                        ></div>
                        {{ header }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, rowIndex) in props.tableData" :key="rowIndex">
                    <td
                        v-for="(cell, cellIndex) in row"
                        :key="cellIndex"
                        class="px-4 py-2 border border-gray-300"
                    >
                        {{ cell }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { throttle } from "lodash";

const props = defineProps({
    columns: Array,
    tableData: Array,
});
</script>

<style scoped>
th {
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
}
</style>
