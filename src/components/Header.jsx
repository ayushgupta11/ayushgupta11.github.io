import React from 'react'
import Footer from './Footer'

export default function Header() {
    const images = require.context('../static/images/', true);
    const imageContext = (path) => {
        let img = images(path);
        return img.default
    }
    return (
        <header id="header">
            <div className="inner">
                <a href="#" className="image avatar"><img src={imageContext('./avatar2.jpg')} alt="" /></a>
                <h1><strong>I am Ayush Gupta</strong>, a full-stack engineer<br />
            MERN/ MEAN Engineer<br /></h1>
            </div>
            <Footer />
        </header>
    )
}