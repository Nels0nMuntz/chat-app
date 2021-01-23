import { dialogsApi } from './../../utils/api';
import actionTypes from './../actionTypes';


const actions = {
    setDialogsAC: items => ({ type: actionTypes.dialogs.SET_ITEMS, payload: items }),
    fetchDialogs: () => dispatch => {
        dialogsApi.getAll().then(({ data }) => dispatch(actions.setDialogsAC(data)))
    }
};

export default actions;