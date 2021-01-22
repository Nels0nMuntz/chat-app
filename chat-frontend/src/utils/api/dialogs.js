import { axios } from "../../core";

const api = {
    getAll: () => axios.get("/dialogs")
};

export default api;