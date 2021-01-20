import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types';

import { Check, Time } from '../../components';

import './Message.scss'


const Message = ({ avatar, text, date, attachments, isOwn, isReaded, isTyping }) => {
    return (
        <div className={classnames(
            "message",
            !isOwn && "incoming-message",
            isTyping && "typing-message"
        )}>
            <div className="message__container">
                <div className="message__avatar">
                    <img src={avatar} alt="avatar" />
                </div>
                <div className="message__content">
                    {(text || isTyping) && (
                        <div className="message__text">
                            <div>
                                {text}
                                <div className="message__text_typing">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
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
                        {!isTyping && <Check isReaded={isReaded} />}                        
                    </div>
                )}
                {(date && !isTyping) && (
                    <div className="message__date">
                        <Time date={date} />             
                    </div>
                )}
            </div>
        </div>
    )
};

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    attachments: PropTypes.array,
    isOwn: PropTypes.bool.isRequired,
    isReaded: PropTypes.bool,
    isTyping: PropTypes.bool,
};

export default Message;