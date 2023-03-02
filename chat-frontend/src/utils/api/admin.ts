import { axios } from "../../core";

const adminApi = {
    getAll: () => axios.get("/dialogs")
        .then(response => response.data)
};

export default adminApi;