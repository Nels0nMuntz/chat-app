import { InitialState } from "./types";


const initialState: InitialState = {
    items: [],
    isFetchingMessages: false
};

const reducer = (state: InitialState = initialState, action: any): InitialState => {
    switch (action.type) {
        case "MESSAGES:FETCH_MESSAGES":
            return {
                ...state,
                items: 
            }
        default:
            return state;
    }
}