import React from 'react';
import Message from '../Message/Message';
import { Message as MessageType } from '../../redux/messages/types';
import './Messages.scss';


type Props = {
    messages: Array<MessageType>
}

const Messages: React.FC<Props> = ({ messages }) => {

    return (
        <React.Fragment>
            {messages.map((item, index) => (
            <div className="message-wrapper" key={item._id}>
                <Message
                    {...item}
                    audio={null}
                    attachments={null}
                    isOwn={null}
                    isTyping={null}
                />
            </div>
        ))}
        </React.Fragment>
    )
};

export default Messages
