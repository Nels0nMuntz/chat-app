import { InitialState, Action } from "./types"

const initialState: InitialState = {
    items: [],
    currentDialogId: null,
    isFetchingDialogs: false,
};

const reducer = (state: InitialState = initialState, action: Action): InitialState => {
    switch (action.type) {
        case "DIALOGS:FETCH_DIALOGS":
            return {
                ...state,
                items: action.payload
            }; 
        case "DIALOGS:CHANGE_FETCHING_STATE":
            return {
                ...state,
                isFetchingDialogs: action.payload
            }   
        case "DIALOGS:CHANGE_CURRENT_DIALOG":
            return {
                ...state,
                currentDialogId: action.payload
            }   
        default:
            return state;
    }
};

export default reducer;