import actiontypes from './../actionTypes';

const {
    SET_ITEMS,
    CHANGE_IS_FETCHING,
} = actiontypes.messages;

const initialState = {
    items: null,
    isFetchingMessages: false,
};

const messagesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_ITEMS:
            return { ...state, items: payload };
        case CHANGE_IS_FETCHING:
            return { ...state, isFetchingMessages: payload };
        default:
            return state;
    }
};

export default messagesReducer;