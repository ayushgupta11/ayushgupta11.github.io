import React from 'react'

export default function Work() {
    const images = require.context('../static/images/', true);
    const imageContext = (path) => {
        try {
            let img = images(path);
            return img.default
        }
        catch (err) {
            return null
        }
    }

    const worksData = [
        {
            title: 'Wall Posts App clone from Facebook',
            refImage: './fulls/01.jpg',
            desc: 'A Facebook-like application that lets a user login/signup into the system & add posts to its timeline. Based on MERN Stack along with Web sockets.',
            thumbImage: './thumbs/01.jpg',
            link: 'https://github.com/ayushgupta11/wall-posts-facebook'
        },
        {
            title: 'E-commerce Application Server',
            refImage: './fulls/02.jpg',
            desc: 'A Node.js, Express & MongoDB based server application for e-commerce. Deployed on: https://healthcart-server.herokuapp.com/',
            thumbImage: './thumbs/02.jpg',
            link: 'https://github.com/ayushgupta11/ecommerce'
        },
        {
            title: 'Todo App',
            refImage: './fulls/03.jpg',
            desc: 'Simple Todo App based on Vue.js & Vuex. Used Firebase for deploying the project.',
            thumbImage: './thumbs/03.jpg',
            link: 'https://github.com/ayushgupta11/todo-app'
        },
        {
            title: 'Monorepo Project Setup for Sharing Components',
            refImage: './fulls/04.jpg',
            desc: 'A React-based monorepo architecture project setup for sharing components between multiple applications.',
            thumbImage: './thumbs/04.jpg',
            link: 'https://github.com/ayushgupta11/monorepo-components'
        },
        // {
        //     title: 'Magna sed consequat tempus',
        //     refImage: './fulls/05.jpg',
        //     desc: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
        //     thumbImage: './thumbs/05.jpg'
        // },
        // {
        //     title: 'Magna sed consequat tempus',
        //     refImage: './fulls/06.jpg',
        //     desc: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
        //     thumbImage: './thumbs/06.jpg'
        // }
    ]
    return (
        <section id="two">
            <h2>Recent Work</h2>
            <div className="row">
                {
                    worksData.map((item, index) => {
                        return (
                            <article className="col-6 col-12-xsmall work-item" key={index}>
                                <a target="_blank" href={imageContext(item.link)} className="image fit thumb">
                                    <img src={imageContext(item.thumbImage)} alt="" />
                                </a>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </article>
                        )
                    })
                }
            </div>
            <ul className="actions">
                <li><a href="https://github.com/ayushgupta11" target="_blank" className="button">Full Portfolio</a></li>
            </ul>
        </section>
    )
}
