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

export const fetchDatabaseTable = async (database, table, page = 1) => {
    const response = await axios.get(`${window.location.origin}/database-viewer/api/${database}/${table}`, {
        params: {
            page: page,
        }
    })

    if (response.status === 200) {
        return response.data;
    } else {
        return [];
    }
}