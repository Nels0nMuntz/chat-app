import React from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';

import { Message } from '..';

import './Messages.scss'

const Messages = ({ list }) => {

    const mockList = [
        {
            avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            text: 'Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝',
            date: "Sun Apr 21 2019 21:55:29",
            audio: "https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.mp3",
            isReaded: true,
            isOwn: false
        },
        {
            avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            date: "Sun Apr 21 2019 21:55:29",
            audio: "https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.mp3",
            attachments: [
                {
                    filename: "image.jpg",
                    url: "https://source.unsplash.com/100x100/?random=1&nature,water"
                },
                {
                    filename: "image.jpg",
                    url: "https://source.unsplash.com/100x100/?random=2&nature,water"
                },
                {
                    filename: "image.jpg",
                    url: "https://source.unsplash.com/100x100/?random=3&nature,water"
                }
            ],
            isReaded: true,
            isOwn: false
        },
        {
            avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            date: "Sun Apr 21 2019 21:55:29",
            text: "Hello, World!",
            audio: "https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.mp3",
            isOwn: true
        },
        {
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            date: "Sun Apr 21 2019 21:55:29",
            attachments: [
                {
                    filename: "image.jpg",
                    url: "https://source.unsplash.com/100x100/?random=1&nature,water"
                }
            ],
            isReaded: true,
            isOwn: false
        },
        {
            avatar: "https://images.unsplash.com/photo-1597357664116-6510db2a06b4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            date: "Sun Apr 21 2019 21:55:29",
            audio: "https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.mp3",
            isReaded: true,
            isOwn: false
        },
        {
            avatar: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            date: "Sun Apr 21 2019 21:55:29",
            audio: "https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.mp3",
            isReaded: true,
            isOwn: false,
            isTyping: true,
        }
    ]

    return list ? (
        <React.Fragment>
            {mockList.map((item, index) => (
                <div className="message-wrapper" key={index}>
                    <Message {...item} />
                </div>
            ))}
        </React.Fragment>
    ) : (
            <Empty description="Откройте диалог" />
        )
};

Messages.propTypes = {
    list: PropTypes.array.isRequired,
};

export default Messages
