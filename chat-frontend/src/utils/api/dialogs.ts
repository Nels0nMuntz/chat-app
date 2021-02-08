import { axios } from "../../core";
import { Dialog } from "../../redux/dialogs/types";

const dialogsApi = {
    getAll: () => axios.get<Array<Dialog>>("/dialogs")
        .then(response => response.data)
};

export default dialogsApi;