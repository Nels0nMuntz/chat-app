import React from 'react';
import Message from '../Message/Message';
import { Message as MessageType } from '../../redux/messages/types';
import './Messages.scss';


type Props = {
    messages: Array<MessageType>
}

const Messages: React.FC<Props> = ({ messages }) => {
    
    return messages.map((item, index) => (
        <div className="message-wrapper" key={item._id}>
            {console.log(item)}
            <Message {...item} />
        </div>
    ))
};

export default Messages
