import React from 'react';
import PropTypes from 'prop-types';

import Message from './../Message/Message';

import './Messages.scss';


const Messages = ({ messages }) => {
    
    return messages.map((item, index) => (
        <div className="message-wrapper" key={index}>
            {console.log(item)}
            <Message {...item} />
        </div>
    ))
};

Messages.propTypes = {
    list: PropTypes.array.isRequired,
};

export default Messages
