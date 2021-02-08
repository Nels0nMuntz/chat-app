export enum ActioinTypes{
    FetchDialogs = "DIALOGS:FETCH_DIALOGS",
    ChangeFatchingState = "DIALOGS:CHANGE_FETCHING_STATE",
    ChangeCurrentDialog = "DIALOGS:CHANGE_CURRENT_DIALOG"
}

export type User = {
    _id: string
    firstName: string
    lastName: string
    last_seen: string
    avatar: string | undefined
}

type Message = {    
    _id: string
    text: string
    read: boolean
}

export type Dialog = {
    _id: string
    author: User
    partner: User
    lastMessage: Message
    createdAt: string
    updatedAt: string
}

export type InitialState = {
    items: Array<Dialog> | null,
    currentDialogId: string | null,
    isFetchingDialogs: boolean,
}

export type Action = FetchDialoigsAction | ChangeIsFetchingAction | ChangeCurrentDialogAction

export type FetchDialoigsAction = {
    type: ActioinTypes.FetchDialogs
    payload: Array<Dialog>
}
export type ChangeIsFetchingAction = {
    type: ActioinTypes.ChangeFatchingState
    payload: boolean
}
export type ChangeCurrentDialogAction = {
    type: ActioinTypes.ChangeCurrentDialog
    payload: string
}