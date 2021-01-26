import { dialogsApi } from './../../utils/api';
import actionTypes from './../actionTypes';


const actions = {
    setDialogs: items => ({ type: actionTypes.dialogs.SET_ITEMS, payload: items }),
    fetchDialogs: () => dispatch => {
        dialogsApi.getAll()
            .then(({ data }) => dispatch(actions.setDialogs(data)))
            .then(() => dispatch(actions.changeIsFetching(false)))
    },
    changeIsFetching: value => ({ type: actionTypes.dialogs.CHANGE_IS_FETCHING, payload: value }),
    setCurrentDialog: id => ({ type: actionTypes.dialogs.SET_CURRENT_DIALOG, payload: id }),
};

export default actions;