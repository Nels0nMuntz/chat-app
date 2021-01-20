import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types';
import distanceInWordsToNow from 'date-fns/formatDistanceToNow';
import ruLocale from "date-fns/locale/ru";

import './Message.scss'
import readed from './../../assets/images/checked.svg'
import noReaded from './../../assets/images/no-checked.svg'


const Message = ({ avatar, text, date, isOwn, isReaded, attachments }) => {
    return (
        <div className={classnames(
            "message",
            !isOwn && "incoming-message"
        )}>
            <div className="message__container">
                <div className="message__avatar">
                    <img src={avatar} alt="avatar" />
                </div>
                <div className="message__content">
                    {text && (
                        <div className="message__text">
                            <p>{text}</p>
                        </div>
                    )}
                    {attachments && (
                        <ul className="message__attachment attachment-list">
                            {attachments.map((item, index) => (
                                <li className="attachment-list__item" key={index}>
                                    <img src={item.url} alt={item.filename} />
                                </li>
                            ))}
                        </ul>
                    )}
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
                <div className="message__date">
                    {distanceInWordsToNow(new Date(date), { addSuffix: true, locale: ruLocale })}
                </div>
            </div>
        </div>
    )
};

Message.defaultProps = {
    isReaded: PropTypes.bool,
}

Message.propTypes = {
    avatar: PropTypes.string.isRequired,
    text: PropTypes.string,
    date: PropTypes.string.isRequired,
    isOwn: PropTypes.bool.isRequired,
    isReaded: PropTypes.bool,
    attachments: PropTypes.arrayOf(PropTypes.object),
}

export default Message;