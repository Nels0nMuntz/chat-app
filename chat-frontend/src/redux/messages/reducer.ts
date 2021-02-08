import { Action, InitialState } from "./types";


const initialState: InitialState = {
    items: [],
    isFetchingMessages: false
};

const reducer = (state: InitialState = initialState, action: Action): InitialState => {
    switch (action.type) {
        case "MESSAGES:FETCH_MESSAGES":
            return {
                ...state,
                items: action.payload
            };
        case "MESSAGES:CHANGE_FETCHING_STATE":
            return {
                ...state,
                isFetchingMessages: action.payload
            };
        default:
            return state;
    }
};

export default reducer;