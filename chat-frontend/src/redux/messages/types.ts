export type InitialState = {
    items: Array<Message>
    isFetchingMessages: boolean
}

export enum ActionTypes {
    FetchMessages = "MESSAGES:FETCH_MESSAGES",
    ChangeFetchingState = "MESSAGES:CHANGE_FETCHING_STATE",
}

export type Message = {
    _id: string
    text: string
    createdAt: string
    updatedAt: string
    dialogId: string
    createdBy: {
        _id: string
        firstName: string
        lastName: string
    }
    read: boolean
}

export type FetchMessagesAction = {
    type: ActionTypes.FetchMessages
    payload: Array<Message>
}
export type ChangeFetchingStateAction = {
    type: ActionTypes.ChangeFetchingState
    payload: boolean
}

export type Action = FetchMessagesAction | ChangeFetchingStateAction