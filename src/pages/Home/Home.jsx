import React from 'react'
import { TeamOutlined, EllipsisOutlined } from '@ant-design/icons';

import { Message, Messages, Status } from '../../components'

import './Home.scss'
import makeDialogIcon from './../../assets/images/make-dialog.svg'


const Home = () => {
    return (
        <section className="home">
            <div className="chat">
                <aside className="chat__sidebar sidebar">
                    <header className="sidebar__header header-sidebar">
                        <div className="header-sidebar__title">
                            <TeamOutlined style={{ fontSize: '21px', opacity: '0.8' }} />
                            <span>Список диалогов</span>
                        </div>
                        <div className="header-sidebar__icon">
                            <img src={makeDialogIcon} alt="make dialog" />
                        </div>
                    </header>
                </aside>
                <main className="chat__dialog dialog">
                    <header className="dialog__header header-dialog">
                        <div className="header-dialog__user">
                            <strong>Гай Юлий Цезарь</strong>
                            <Status isOnline={true} />
                        </div>
                        <div className="header-dialog__button">
                            <EllipsisOutlined style={{ fontSize: '30px', opacity: '0.5', cursor: 'pointer' }} />
                        </div>
                    </header>
                    <div className="dialog__messages">
                        <Messages
                            list={[]}
                        />
                    </div>
                    {/* <Message
                        avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
                        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
                        date="Sun Apr 21 2019 21:55:29"
                        attachments={[
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
                        ]}
                        isReaded={false}
                        isOwn={true}
                    />
                    <Message
                        avatar="https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1"
                        text="Салам, брат Цезарь!"
                        date="Sun Apr 21 2019 21:55:29"
                        attachments={[
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
                        ]}
                        isReaded={true}
                        isOwn={false}
                    />
                    <Message
                        avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
                        text="Hello World!"
                        date="Sun Apr 21 2019 21:59:29"
                        isReaded={false}
                        isOwn={true}
                    />
                    <Message
                        avatar="https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1"
                        attachments={[
                            {
                                filename: "image.jpg",
                                url: "https://source.unsplash.com/100x100/?random=1&nature,water"
                            }
                        ]}
                        date="Sun Apr 21 2020 21:59:29"
                        isReaded={false}
                        isOwn={false}
                    />
                    <Message
                        avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
                        text=""
                        date=""
                        isReaded={false}
                        isOwn={true}
                        isTyping={true}
                    /> */}
                </main>
            </div>
        </section>
    )
}

export default Home
