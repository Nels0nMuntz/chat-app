import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Contacts as ContactsBase, Preloader } from '../../components'
import { fetchDialogs, changeCurrentDialog } from '../../redux/dialogs/actions';

import { RootState } from '../../redux/store'

const Contacts: React.FC = () => {

    const dispatch = useDispatch();
    const dialogs = useSelector((state: RootState) => state.dialogs.items);
    const isFetching = useSelector((state: RootState) => state.dialogs.isFetchingDialogs);
    const currentDialogId = useSelector((state: RootState) => state.dialogs.currentDialogId);
    React.useEffect(() => {
        if(!dialogs.length) dispatch(fetchDialogs())
    }, [dialogs, dispatch]);
    const onClickDialog = (id: string): void => {
        if(currentDialogId === id) return;
        dispatch(changeCurrentDialog(id));
    };

    if (isFetching) return <Preloader />;

    return (
        <ContactsBase
            dialogs={dialogs}
            currentDialogId={currentDialogId}
            onClickDialog={onClickDialog}
        />
    )
};

export default Contacts;