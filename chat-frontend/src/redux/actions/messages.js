import { messagesApi } from "../../utils/api";
import actionTypes from './../actionTypes';

const actions = {
    fetchMessages: id => dispatch => {
        dispatch(actions.changeIsFetching(true));
        messagesApi.getAllByDialogId(id)
            .then(({ data }) => dispatch(actions.setMessages(data)))
            .then(() => dispatch(actions.changeIsFetching(false)))
    },
    setMessages: data => ({ type: actionTypes.messages.SET_ITEMS, payload: data }),
    changeIsFetching: value => ({ type: actionTypes.messages.CHANGE_IS_FETCHING, payload: value }),
}

export default actions;