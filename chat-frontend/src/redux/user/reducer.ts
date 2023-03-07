import { InitialState, Action } from "./types";

const initialState: InitialState = {
    isAuth: false,
    user: null,    
    token: window.localStorage.token,
};

const reducer = (state: InitialState = initialState, action: Action): InitialState => {
    switch (action.type) {
        case "SET_IS_AUTH":
            return {
                ...state,
                isAuth: action.payload.isAuth,
                user: action.payload.user
            }
        default:
            return state;
    }
};

export default reducer;