import { AxiosResponse } from "axios";
import { axios } from '../../core';
import { Message } from "../../redux/messages/types";


const messagesApi = {
    getDialogMessages: (id: string): Promise<AxiosResponse<any>> => {
        axios.get<Array<Message>>('messages?dialog=' + id)
            .then(response => {
                if(response.status === 200) return response.data;
                throw new Error()
            })
    },
};

export default messagesApi;