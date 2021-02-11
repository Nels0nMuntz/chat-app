import { dialogsApi } from "../../utils/api";
import { Dialog, Action, FetchDialoigsAction, ChangeIsFetchingAction, ChangeCurrentDialogAction, ActioinTypes } from './types';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store'


const fetchDialogsAC = (dialogs: Array<Dialog>): FetchDialoigsAction => ({ type: ActioinTypes.FetchDialogs, payload: dialogs });
const changeIsFetching = (value: boolean): ChangeIsFetchingAction => ({ type: ActioinTypes.ChangeFatchingState, payload: value })

export const fetchDialogs = (): ThunkAction<Promise<void>, RootState, unknown, Action> => async dispatch => {debugger
    dispatch(changeIsFetching(true));
    let dialogs = await dialogsApi.getAll();
    dispatch(fetchDialogsAC(dialogs));
    dispatch(changeIsFetching(false));
};

export const changeCurrentDialog = (id: string): ChangeCurrentDialogAction => ({ type: ActioinTypes.ChangeCurrentDialog, payload: id });