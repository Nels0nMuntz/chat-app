import { IUser, SetIsAuthAction } from "./types";

export const initUser = (isAuth: boolean, user: IUser): SetIsAuthAction => ({
    type: "SET_IS_AUTH",
    payload: { isAuth, user }
});