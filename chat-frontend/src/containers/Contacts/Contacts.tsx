import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Contacts as ContactsBase, Preloader } from '../../components'
import { socket } from '../../core';
import { fetchDialogs, changeCurrentDialog } from '../../redux/dialogs/actions';

import { RootState } from '../../redux/store'

const Contacts: React.FC = () => {

    const dispatch = useDispatch();
    const dialogs = useSelector((state: RootState) => state.dialogs.items);
    const isFetching = useSelector((state: RootState) => state.dialogs.isFetchingDialogs);
    const currentDialogId = useSelector((state: RootState) => state.dialogs.currentDialogId);
    
    React.useEffect(() => {
        if(!dialogs) dispatch(fetchDialogs())
    }, [dialogs, dispatch]);

    React.useEffect(() => {
        socket.on('SERVER:DIALOG_CRETED', (data: any) => {
            debugger
            console.log(data);
            dispatch(fetchDialogs());
        })
    }, [])

    const onClickDialog = (id: string): void => {
        if(currentDialogId === id) return;
        dispatch(changeCurrentDialog(id));
    };

    if (isFetching || !dialogs) return <Preloader />;    

    return (
        <ContactsBase
            dialogs={dialogs}
            currentDialogId={currentDialogId}
            onClickDialog={onClickDialog}
        />
    )
};

export default Contacts;