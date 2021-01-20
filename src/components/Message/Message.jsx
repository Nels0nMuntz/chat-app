import React from 'react'
import classnames from 'classnames'
import PropTypes from "prop-types";
import ruLocale from "date-fns/locale/ru";

import './Message.scss'

import avatar1 from './../../assets/images/avatar1.jpg'
import attach1 from './../../assets/images/attach_1.jpg'
import attach2 from './../../assets/images/attach_2.jpg'
import attach3 from './../../assets/images/attach_3.jpg'
import readed from './../../assets/images/checked.svg'
import noReaded from './../../assets/images/no-checked.svg'
import distanceInWordsToNow from 'date-fns/formatDistanceToNow';
import { parseISO } from 'date-fns/esm';


const Message = ({ avatar, text, date, isOwn, isReaded, attachments }) => {
    console.log(date);
    return (
        <div className={classnames(
            "message",
            !isOwn && "incoming-message"
        )}>
            <div className="message__container">
                <div className="message__row">
                    <div className="message__avatar">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className="message__content">
                        {text && (
                            <div className="message__text">
                                <p>{text}</p>
                            </div>
                        )}
                        <ul className="message__attachment attachment-list">
                            {attachments && attachments.map((item, index) => (
                                <li className="attachment-list__item" key={index}>
                                    <img src={item.url} alt={item.filename} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    {!isOwn && (
                        <div className="message__check">
                            {isReaded ? (
                                <img src={readed} alt="check" />
                            ) : (
                                    <img src={noReaded} alt="check" />
                                )}
                        </div>
                    )}
                </div>
                <div className="message__row">
                    <div className="message__date">
                        {distanceInWordsToNow(new Date(date), { addSuffix: true, locale: ruLocale })}
                    </div>
                </div>
            </div>
        </div>
    )
};

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
    attachments: PropTypes.array
};

export default Message;
