import axios from "axios"

export const fetchDatabases = async () => {
    const reponse = await axios.get(`${window.location.origin}/database-viewer/api/databases`);
    if (reponse.status === 200) {
        return reponse.data;
    } else {
        return [];
    }
}

export const fetchTables = async (database) => {
    const reponse = await axios.get(`${window.location.origin}/database-viewer/api/${database}/tables`);
    if (reponse.status === 200) {
        return reponse.data;
    } else {
        return [];
    }
}

export const fetchDatabaseTable = async (database, table, page = 1, paginate = 10, filter = null, sort = null) => {
    const response = await axios.get(`${window.location.origin}/database-viewer/api/${database}/${table}`, {
        params: {
            page: page,
            paginate: paginate,

            filter_column: filter?.column,
            filter_operator: filter?.operator,
            filter_query: filter?.query,

            sort_column: sort?.column,
            sort_order: sort?.order,
        }
    })

    if (response.status === 200) {
        return response.data;
    } else {
        return [];
    }
}