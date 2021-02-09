import { axios } from "../../core";

const dialogsApi = {
    getAll: () => axios.get("/dialogs")
        .then(response => {
            if(response.status === 200) return response.data
        })
};

export default dialogsApi;