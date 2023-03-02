import { axios } from "../../core";

const authApi = {
    getAll: () => axios.get("/auth/all")
        .then(response => response.data)
};

export default authApi;