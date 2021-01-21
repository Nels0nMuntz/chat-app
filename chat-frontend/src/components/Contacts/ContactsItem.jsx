import React from 'react';
import classnames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';

import { Avatar } from '..';

import './Contacts.scss'

const getMessageTime = date => {
    const time = new Date(2019, 1, 6, 14, 0);
    // const time = Date.now();
    if(isToday(time)) return format(time, "hh:mm")
    return format(time, "dd.mm.yyyy")
}

const ContactsItem = ({ user, message }) => {

    const time = React.useMemo(() => getMessageTime(message.created), [message.created]);

    return (
        <div className={classnames(
            "contact",
        )}>
            <div className="contact__avatar">
                <Avatar user={user}/>
            </div>
            <div className="contact__info">
                <div className="contact__row">
                    <div className="contact__fulname flex-flexible">{user.fullname}</div>
                    <div className="contact__date flex-fixed">{time}</div>
                </div>
                <div className="contact__row">
                    <div className="contact__text flex-flexible">{message.text}</div>
                    <div className="contact__check flex-fixed">9+</div>
                </div>
            </div>
        </div>
    )
};

export default ContactsItem;
