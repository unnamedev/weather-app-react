import React from 'react';
import {Link} from "react-router-dom"
// 💡 Data
import {pages} from "../../data/pages"

const About = () => {
    const {about: {title, text, version, button}} = pages

    return <div className="page--center">
        <div className="container">
            <h1 className="title title-1">{title}</h1>
            <p>{text}</p>
            <p>{version}</p>
            <Link className="button button--primary" to="/home">{button}</Link>
        </div>
    </div>
}

export default About;
