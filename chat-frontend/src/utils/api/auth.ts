import { axios } from "../../core";

const authApi = {
    getAll: () => axios.get("/auth")
        .then(response => response.data)
};

export default authApi;