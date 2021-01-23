const initialState = {
    items: [],
    currentDialog: null,
};

const dialogs = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DIALOGS:SET_ITEMS':
            return { ...state, items: payload }
        default:
            return state;
    }
};

export default dialogs;