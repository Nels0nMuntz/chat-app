import actionTypes from './../actionTypes';

const {
    SET_ITEMS,
    CHANGE_IS_FETCHING,
    SET_CURRENT_DIALOG
} = actionTypes.dialogs

const initialState = {
    items: null,
    currentDialog: null,
    isFetchingDialogs: true,
};

const dialogs = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_ITEMS:
            return { ...state, items: payload || [] };
        case CHANGE_IS_FETCHING:
            return { ...state, isFetchingDialogs: payload };
        case SET_CURRENT_DIALOG:
            if(state.currentDialog === payload) return state;
            return { ...state, currentDialog: payload };
        default:
            return state;
    }
};

export default dialogs;