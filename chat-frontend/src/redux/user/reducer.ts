import { InitialState, Action } from "./types";

const initialState: InitialState = {
    isAuth: false
};

const reducer = (state: InitialState = initialState, action: Action): InitialState => {
    switch (action.type) {
        case "SET_IS_AUTH":
            return {
                ...state,
                isAuth: action.payload
            }
        default:
            return state;
    }
};

export default reducer;