import { InitialState, Action } from "./types";

const initialState: InitialState = {
    data: {
        token: null,
        isAuth: false
    }
};

const reducer = (state: InitialState = initialState, action: Action) => {
    switch (action.type) {
        case "SET_DATA":
            return {
                ...state,
                data: {
                    ...state.data,
                    token: action.payload.token,
                    isAuth: true
                }
            }
        default:
            return state;
    }
};

export default reducer;