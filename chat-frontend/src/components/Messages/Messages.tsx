import React from 'react';
import Message from '../Message/Message';
import { Message as MessageType } from '../../redux/messages/types';
import './Messages.scss';


type Props = {
    messages: Array<MessageType>
    userId?: string
}

const Messages: React.FC<Props> = ({ messages, userId }) => {

    // console.log("Messages");
    // console.log(messages);
    

    return (
        <React.Fragment>
            {messages.map((item, index) => (
            <div className="message-wrapper" key={item._id}>
                <Message
                    {...item}
                    audio={null}
                    attachments={null}
                    isOwn={item.createdBy._id === userId}
                    isTyping={null}
                />
            </div>
        ))}
        </React.Fragment>
    )
};

export default React.memo(Messages);
