type SET_IS_AUTH = "SET_IS_AUTH";

export type InitialState = {
    isAuth: boolean
};
export type SetIsAuthAction = {
    type: SET_IS_AUTH
    payload: boolean
};

export type Action = SetIsAuthAction