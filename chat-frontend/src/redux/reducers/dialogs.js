const initialState = {
    items: []
};

const dialogsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DIALOGS:SET_ITEMS':
            return { ...state, items: payload }
        default:
            return state;
    }
};

export default dialogsReducer;