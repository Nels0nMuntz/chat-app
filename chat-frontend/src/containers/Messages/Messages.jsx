import React from 'react';
import { Empty } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { Messages as MessagesBase, Preloader } from './../../components';
import { messagesActions } from '../../redux/actions';

const Messages = () => {

    const dispatch = useDispatch();
    const dialogs = useSelector(state => state.dialogs.items);
    const messages = useSelector(state => state.messages.items);
    const currentDialogId = useSelector(state => state.dialogs.currentDialog);
    const isFetching = useSelector(state => state.messages.isFetchingMessages);

    React.useEffect(() => currentDialogId && dispatch(messagesActions.fetchMessages(currentDialogId)), [currentDialogId, dispatch])

    if (isFetching || !dialogs) return <Preloader />;
    if (messages) {
        return !!messages.length ? <MessagesBase messages={messages} /> : <Empty description="Начните диалог" style={{ height: '100%' }} />
    }
    if(!!dialogs){
        return !!dialogs.length ? <Empty description="Откройте диалог" style={{ height: '100%' }} /> : <Empty description="Создайте диалог" style={{ height: '100%' }} />
    };
}

export default Messages;