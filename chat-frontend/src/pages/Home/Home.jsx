import React from 'react'
import { TeamOutlined, EllipsisOutlined, SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

import { DialogInput, Contacts, Messages, Status, CustomScrollbar } from '../../components'

import './Home.scss'
import makeDialogIcon from './../../assets/images/make-dialog.svg'
import { dialogs } from '../../utils/api';


const Home = () => {

    const getData = async () => {
        let promise = await dialogs.getAll();
        console.log(promise);
    }

    getData()

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
                    <div className="sidebar__contacts sidebar-contacts">
                        <CustomScrollbar>
                            <div className="sidebar-contacts__search">
                                <Input
                                    size="large"
                                    placeholder="Поиск среди контактов"
                                    prefix={<SearchOutlined style={{ opacity: '0.8' }} />}
                                    bordered={false}
                                    style={{ background: '#F7F8F9', fontSize: '14px' }}
                                />
                            </div>
                            <div className="sidebar-contacts__list user-list">
                                <Contacts />
                            </div>
                        </CustomScrollbar>
                    </div>
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
                    <section className="dialog__messages">
                        <CustomScrollbar>
                            <div className="dialog__messages-wrapper">
                                <Messages
                                    list={[]}
                                />
                            </div>
                        </CustomScrollbar>
                    </section>
                    <section className="dialog__input">
                        <DialogInput />
                    </section>
                </main>
            </div>
        </section>
    )
}

export default Home
