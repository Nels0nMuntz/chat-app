import React from 'react';

import ContactsItem from './ContactsItem';

import './Contacts.scss'


const contacts = [
    {
        user: {
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            fullname: "Jack the Ripper",
        },
        message: {
            text: "Кек. Ты то меня никогда не предашь",
            created:"Wed Sep 19 2020 20:02:43 GMT+0000 (UTC)"
        }        
    },
    {
        user: {
            avatar: "https://images.unsplash.com/photo-1583398289649-6322a88348a0?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            fullname: "Ян Борисович Кум",
        },
        message: {
            text: "Ave Caesar! Morituri te salutant!",
            created:"Wed Sep 19 2020 20:02:43 GMT+0000 (UTC)"
        } 
    },
    {
        user: {
            avatar: "https://images.unsplash.com/photo-1565542632394-1f9c1473d4e8?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            fullname: "Фёдор Достоевский",
        },
        message: {
            text: "Ave Caesar! Morituri te salutant!",
            created:"Wed Sep 19 2020 20:02:43 GMT+0000 (UTC)"
        } 
    },
    {
        user: {
            avatar: "https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1",
            fullname: "Гай Юлий Цезарь",
        },
        message: {
            text: "Всё норм! Флот построили на Лауре. Галлов добили после вашего нападения. Спс! ",
            created:"Wed Sep 19 2020 20:02:43 GMT+0000 (UTC)"
        } 
    },
    {
        user: {
            avatar: null,
            fullname: "Алан Тьюринг",
        },
        message: {
            text: "Всё норм! Флот построили на Лауре. Галлов добили после вашего нападения. Спс! ",
            created:"Wed Sep 19 2020 20:02:43 GMT+0000 (UTC)"
        } 
    },
]

const Contacts = () => {
    return (
        <ul className="contacts__list">
            {contacts && contacts.map(item => (
                <li>
                    <ContactsItem {...item}/>
                </li>
            ))}
        </ul>
    )
};

export default Contacts;
