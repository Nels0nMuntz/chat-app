import { IUser } from "../../redux/user/types";

export type LoginPostData = {
    email: string
    password: string
};
export type LoginFormErrors = {
    [key: string]: string
};
export type Status = {
    type: "error" | "success" | "info" | "warning"
    title?: string
    text?: string
    userData: IUser | null
}