import React from 'react';
import classnames from 'classnames';

import { Avatar } from '..';

import './Contacts.scss'

const ContactsItem = () => {
    return (
        <div className={classnames(
            "contact",
            true && "incomin-message",
            false && "outcoming-message",
            false && "readed-message"
        )}>
            <div className="contact__avatar">
                <Avatar/>
            </div>
            <div className="contact__info">
                <div className="contact__row">
                    <div className="contact__fulname flex-flexible">Jack the Ripper  d d d d d d d d d d d d d</div>
                    <div className="contact__date flex-fixed">24.04.2019</div>
                </div>
                <div className="contact__row">
                    <div className="contact__text flex-flexible">Я ща стрепсилс тебе куплю d d d d d d d d</div>
                    {/* <div className="contact__check flex-fixed">9+</div> */}
                </div>
            </div>
        </div>
    )
};

export default ContactsItem;
