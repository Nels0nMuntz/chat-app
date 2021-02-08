import { axios } from '../../core';
import { Message } from "../../redux/messages/types";


const messagesApi = {
    getDialogMessages: (id: string) => {
        return axios.get<Array<Message>>('messages?dialog=' + id)
            .then(response => response.data)
    },
};

export default messagesApi;