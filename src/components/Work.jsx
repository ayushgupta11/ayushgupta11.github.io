import React from 'react'

export default function Work() {
    const images = require.context('../static/images/', true);
    const imageContext = (path) => {
        try {
            let img = images(path);
            return img.default
        }
        catch (err) {
            return images('../static/images/fulls/01.jpg')
        }
    }

    const worksData = [
        {
            title: 'Magna sed consequat tempus',
            refImage: './fulls/01.jpg',
            desc: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
            thumbImage: './thumbs/01.jpg'
        },
        {
            title: 'Magna sed consequat tempus',
            refImage: './fulls/02.jpg',
            desc: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
            thumbImage: './thumbs/02.jpg'
        },
        {
            title: 'Magna sed consequat tempus',
            refImage: './fulls/03.jpg',
            desc: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
            thumbImage: './thumbs/03.jpg'
        },
        {
            title: 'Magna sed consequat tempus',
            refImage: './fulls/04.jpg',
            desc: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
            thumbImage: './thumbs/04.jpg'
        },
        {
            title: 'Magna sed consequat tempus',
            refImage: './fulls/05.jpg',
            desc: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
            thumbImage: './thumbs/05.jpg'
        },
        {
            title: 'Magna sed consequat tempus',
            refImage: './fulls/06.jpg',
            desc: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
            thumbImage: './thumbs/06.jpg'
        }
    ]
    return (
        <section id="two">
            <h2>Recent Work</h2>
            <div className="row">
                {
                    worksData.map((item, index) => {
                        return (
                            <article className="col-6 col-12-xsmall work-item" key={index}>
                                <a href={imageContext(item.refImage)} className="image fit thumb">
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
                <li><a href="#" className="button">Full Portfolio</a></li>
            </ul>
        </section>
    )
}
