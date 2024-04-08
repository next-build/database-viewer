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

export const fetchDatabaseTable = async (database, table, page = 1, paginate = 10, filter = null) => {
    const response = await axios.get(`${window.location.origin}/database-viewer/api/${database}/${table}`, {
        params: {
            page: page,
            paginate: paginate,

            column: filter?.column,
            operator: filter?.condition,
            query: filter?.query,
        }
    })

    if (response.status === 200) {
        return response.data;
    } else {
        return [];
    }
}