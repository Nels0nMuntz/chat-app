import React from 'react';
import { Empty } from 'antd';
import { Dialog } from '../../redux/dialogs/types'

import ContactsItem from './ContactsItem';

import './Contacts.scss'

type Props = {
    dialogs: Array<Dialog>,
    currentDialogId: string | null,
    onClickDialog: (id: string) => void
}

const Contacts: React.FC<Props> = ({ dialogs, currentDialogId, onClickDialog }) => { 

    return (
        <ul className="contacts__list">
            {!!dialogs.length ? dialogs.map(item => (
                <li>
                    <ContactsItem 
                        dialog={item} 
                        isActive={currentDialogId === item._id}
                        onClickDialog={onClickDialog}
                    />
                </li>
            )) : (
                <Empty description="Диалогов нет" />
            )}
        </ul>
    )
};

export default Contacts;
