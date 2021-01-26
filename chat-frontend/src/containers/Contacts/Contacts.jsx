import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { dialogsActions } from './../../redux/actions';
import { Contacts as ContactsBase, Preloader } from './../../components'

const Contacts = () => {

    const dispatch = useDispatch();
    const dialogs = useSelector(state => state.dialogs.items);
    const isFetching = useSelector(state => state.dialogs.isFetchingDialogs);
    const currentDialogId = useSelector(state => state.dialogs.currentDialog);
    React.useEffect(() =>  !dialogs && dispatch(dialogsActions.fetchDialogs()), []);
    const onClickDialog = id => dispatch(dialogsActions.setCurrentDialog(id));

    if(isFetching) return <Preloader/>;

    return (
        <ContactsBase 
            dialogs={dialogs}
            currentDialogId={currentDialogId}
            onClickDialog={onClickDialog}
        />
    )
};

export default Contacts;