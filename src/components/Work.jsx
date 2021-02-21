import React, { useEffect, useState } from 'react'
import { db } from '../utils/firebase'
import { getLinkPreview } from 'link-preview-js';

export default function Work() {
    const images = require.context('../static/images/', true);
    const [projects, setProjects] = useState([])
    const imageContext = (path) => {
        try {
            let img = images(path);
            return img.default
        }
        catch (err) {
            return null
        }
    }
    useEffect(() => {
        let result = []
        db.collection("projects").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let data = doc.data()
                getLinkPreview(data.link, {
                    imagesPropertyType: "og", // fetches only open-graph images
                }).then(d => {
                    let ogImage = d.favicons[0]
                    if(data.nongit){
                        ogImage = d.images[0]
                    }
                    data['thumbImage'] = ogImage
                    data['refImage'] = ogImage
                    result.push(data)
                    console.log(d)
                    setProjects([...result])
                });
            });
        });
    }, [0])
    return (
        <section id="two">
            <h2>Recent Work</h2>
            <div className="row" style={{ display: 'flex' }}>
                {
                    projects.map((item, index) => {
                        return (
                            <article style={{ order: item.order }} className="col-6 col-12-xsmall work-item" key={index}>
                                <a style={{ height: '200px' }} target="_blank" href={item.link} className="image fit thumb">
                                    <img style={{ height: '100%' }} src={item.thumbImage} alt="" />
                                </a>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </article>
                        )
                    })
                }
            </div>
            <ul className="actions">
                <li><a href="../static/resume.pdf" target="_blank" className="button">Download Resume</a></li>
            </ul>
        </section>
    )
}
