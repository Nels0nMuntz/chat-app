import React from 'react';
import classnames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';

import { Avatar } from '..';

import './Contacts.scss';
import { Dialog } from '../../redux/dialogs/types';


const getMessageTime = (date: string): string => {
    const time = new Date(date);
    console.log(time);
    // const time = date;
    if (isToday(time)) return format(time, "hh:mm")
    return format(time, "dd.mm.yyyy")
}

type Props = {
    dialog: Dialog,
    isActive: boolean,
    onClickDialog: (id: string) => void
}

const ContactsItem: React.FC<Props> = ({ dialog, onClickDialog, isActive }) => {

    const time = React.useMemo(() => getMessageTime(dialog.createdAt), [dialog.createdAt]);
    const onClickItem = () => { onClickDialog(dialog._id) };

    return (
        <div
            className={classnames(
                "contact",
                isActive && 'contact_active'
            )}
            onClick={onClickItem}
        >
            <div className="contact__avatar">
                <Avatar
                    firstName={dialog.partner.firstName}
                    avatar={dialog.partner.avatar}
                />
            </div>
            <div className="contact__info">
                <div className="contact__row">
                    <div className="contact__fulname flex-flexible">{dialog.partner.firstName + ' ' +  dialog.partner.lastName}</div>
                    <div className="contact__date flex-fixed">{time}</div>
                </div>
                <div className="contact__row">
                    <div className="contact__text flex-flexible">{dialog.lastMessage.text}</div>
                    <div className="contact__check flex-fixed">9+</div>
                </div>
            </div>
        </div>
    )
};

export default ContactsItem;
