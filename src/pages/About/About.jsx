import React from "react";
import {Link} from "react-router-dom"
// 💡 Data
import {pages} from "../../data/pages"

const About = () => {
    const {about: {title, icon, text, version, button}} = pages

    return <div className="page--center">
        <div className="container">
            <img src={icon} alt={title} style={{maxWidth: "300px", marginBottom: "30px"}}/>
            <h1 className="title title-1">{title}</h1>
            <p>{text}</p>
            <p>{version}</p>
            <Link className="button button--primary" to="/home">{button}</Link>
        </div>
    </div>
}

export default About;
