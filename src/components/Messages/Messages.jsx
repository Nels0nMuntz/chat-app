import React from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';

import { Message } from '..';

import './Messages.scss'

const Messages = ({ list }) => {

    const mockList = [
        {
            avatar: "https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1",
            text: 'Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝',
            date: "Sun Apr 21 2019 21:55:29",
            audio: "https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.mp3",
            isReaded: true,
            isOwn: false
        },
        {
            avatar: "https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1",
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
            avatar: "https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1",
            date: "Sun Apr 21 2019 21:55:29",
            text: "Hello, World!",
            audio: "https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.mp3",
            isOwn: true
        },
        {
            avatar: "https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1",
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
            avatar: "https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1",
            date: "Sun Apr 21 2019 21:55:29",
            audio: "https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.mp3",
            isReaded: true,
            isOwn: false
        },
        {
            avatar: "https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1",
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
