import { Message, FetchMessagesAction, ActionTypes, Action, ChangeFetchingStateAction } from "./types";
import { Dispatch } from "redux";
import { messagesApi } from "../../utils/api";

const fetchMessagesAC = (messages: Array<Message>): FetchMessagesAction => ({ type: ActionTypes.FetchMessages, payload: messages });
const changeFethingState = (value: boolean): ChangeFetchingStateAction => ({ type: ActionTypes.ChangeFetchingState, payload: value })

export const fetchMessages = (id: string) => async (dispatch: Dispatch<Action>) => {
    dispatch(changeFethingState(true));
    let response = await messagesApi.getDialogMessages(id);
    dispatch(fetchMessagesAC())
}