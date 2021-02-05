import { AxiosResponse } from "axios";
import { axios } from "../../core";
import { LoginPostData } from "../../modules/LoginForm/types";
import { RegisterPostData } from '../../modules/RegisterForm/containers/RegisterForm'


const userAPI = {
    registration: (postData: RegisterPostData): Promise<AxiosResponse<any>> => {
        return axios.post("/user/signup", postData)
    },
    login: (postData: LoginPostData): Promise<AxiosResponse<any>> => {
        return axios.post("/user/signin", postData)
    },
    verify: (hash: string): Promise<AxiosResponse<any>> => {
        return axios.get(`/user/verify?hash=${hash}`)
    }
};

export default userAPI;