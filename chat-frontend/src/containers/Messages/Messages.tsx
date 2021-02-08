import React from 'react';
import { Empty } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { Messages as MessagesBase, Preloader } from '../../components';
import { RootState } from '../../redux/store';
import { fetchMessages } from '../../redux/messages/actions';

const Messages: React.FC = () => {

    const dispatch = useDispatch();
    const dialogs = useSelector((state: RootState) => state.dialogs.items);
    const messages = useSelector((state: RootState) => state.messages.items);
    const currentDialogId = useSelector((state: RootState) => state.dialogs.currentDialogId);
    const isFetching = useSelector((state: RootState) => state.messages.isFetchingMessages);

    React.useEffect(() => {
        if(!currentDialogId) return;
        dispatch(fetchMessages(currentDialogId));
    }, [currentDialogId, dispatch]);

    if (isFetching || !dialogs) return <Preloader />;

    if(!!dialogs){
        return !!dialogs.length ? <Empty description="Откройте диалог" style={{ height: '100%' }} /> : <Empty description="Создайте диалог" style={{ height: '100%' }} />
    };

    return !!messages.length ? <MessagesBase messages={messages} /> : <Empty description="Начните диалог" style={{ height: '100%' }} />

    // if (messages) {
    //     return !!messages.length ? <MessagesBase messages={messages} /> : <Empty description="Начните диалог" style={{ height: '100%' }} />
    // }
    
}

export default Messages;