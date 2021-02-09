import { Dispatch } from "redux";
import { dialogsApi } from "../../utils/api";
import { Dialog, Action, FetchDialoigsAction, ChangeIsFetchingAction, ChangeCurrentDialogAction, ActioinTypes } from './types';


const fetchDialogsAC = (dialogs: Array<Dialog>): FetchDialoigsAction => ({ type: ActioinTypes.FetchDialogs, payload: dialogs });
const changeIsFetching = (value: boolean): ChangeIsFetchingAction => ({ type: ActioinTypes.ChangeFatchingState, payload: value })

export const fetchDialogs = () => async (dispatch: Dispatch<Action>) => {
    dispatch(changeIsFetching(true));
    let dialogs = await dialogsApi.getAll();
    dispatch(fetchDialogsAC(dialogs));
    dispatch(changeIsFetching(false));
}

export const changeCurrentDialog = (id: string): ChangeCurrentDialogAction => ({ type: ActioinTypes.ChangeCurrentDialog, payload: id })