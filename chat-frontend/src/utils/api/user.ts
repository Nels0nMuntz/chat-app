import { AxiosResponse } from "axios";
import { axios } from "../../core";
import { RegisterPostData } from '../../modules/RegisterForm/containers/RegisterForm'


const userAPI = {
    registration: (postData: RegisterPostData): Promise<AxiosResponse<any>> => {
        return axios.post("/user/signup", postData)
    }
};

export default userAPI;