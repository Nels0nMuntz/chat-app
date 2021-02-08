import { Message, FetchMessagesAction, ActionTypes, Action, ChangeFetchingStateAction } from "./types";
import { messagesApi } from "../../utils/api";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";

const fetchMessagesAC = (messages: Array<Message>): FetchMessagesAction => ({ type: ActionTypes.FetchMessages, payload: messages });
const changeFethingState = (value: boolean): ChangeFetchingStateAction => ({ type: ActionTypes.ChangeFetchingState, payload: value });

export const fetchMessages = (id: string): ThunkAction<Promise<void>, RootState, unknown, Action> => async dispatch => {
    dispatch(changeFethingState(true));
    let response = await messagesApi.getDialogMessages(id);
    dispatch(fetchMessagesAC(response));
    dispatch(changeFethingState(false));
};