import { axios } from "../../core";

const clientsApi = {
    getAll: () => axios.get("clients")
        .then(response => response.data)
};

export default clientsApi;