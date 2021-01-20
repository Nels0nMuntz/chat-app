import React from 'react'
import { Message } from '../../components'

import './Home.scss'


const Home = () => {
    return (
        <div className="home">
            <Message
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
                avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
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
                avatar="https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1"
                text="Hello World!"
                date="Sun Apr 21 2019 21:59:29"
                isReaded={false}
                isOwn={true}
            />
            <Message
                avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
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
        </div>
    )
}

export default Home
