type SET_IS_AUTH = "SET_IS_AUTH";

export interface IUser {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    avatar?: string
};

export type InitialState = {
    isAuth: boolean
    user: IUser | null
    token?: string
};
export type SetIsAuthAction = {
    type: SET_IS_AUTH
    payload: {
        isAuth: boolean
        user: IUser
    }
};

export type Action = SetIsAuthAction