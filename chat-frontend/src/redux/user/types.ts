type SET_DATA = "SET_DATA";

export type InitialState = {
    data: {
        token: string | null
        isAuth: boolean
    }
};
export type SetDataAction = {
    type: SET_DATA
    payload: {
        token: string
    }
};

export type Action = SetDataAction