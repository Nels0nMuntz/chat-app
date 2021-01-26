import React from 'react';
import { Empty } from 'antd';

import ContactsItem from './ContactsItem';

import './Contacts.scss'


const Contacts = ({ dialogs, currentDialogId, onClickDialog }) => { 

    return (
        <ul className="contacts__list">
            {!!dialogs.length ? dialogs.map(item => (
                <li>
                    <ContactsItem 
                        dialog={item} 
                        onClickDialog={onClickDialog} 
                        isActive={currentDialogId === item._id}
                    />
                </li>
            )) : (
                <Empty description="Диалогов нет" />
            )}
        </ul>
    )
};

export default Contacts;
