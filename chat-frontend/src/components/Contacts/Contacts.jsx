import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dialogsActions } from './../../redux/actions'

import ContactsItem from './ContactsItem';

import './Contacts.scss'


const Contacts = () => {

    const dispatch = useDispatch()

    const contactsList = useSelector(state => state.dialogs.items);

    React.useEffect(() => {
        dispatch(dialogsActions.fetchDialogs())
    }, [])

    return (
        <ul className="contacts__list">
            {!!contactsList.length && contactsList.map(item => (
                <li>
                    <ContactsItem dialog={item}  />
                </li>
            ))}
        </ul>
    )
};

export default Contacts;
