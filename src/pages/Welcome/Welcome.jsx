import React from "react"
import {Link} from "react-router-dom"
// 💡 Style
import "./Welcome.scss"
// 💡 Data
import {pages} from "../../data/pages"

const Welcome = () => {
    const {welcome: {icon, title, text, button}} = pages
    
    return <section className="page-welcome page--center">
        <div className="container">
            <img className="page-welcome__ico" src={icon} alt={title}/>
            <h1 className="title title-1">{title}</h1>
            <p className="page-welcome__text">{text}</p>
            <Link className="button button--primary" to="/home">{button}</Link>
        </div>
    </section>
}

export default Welcome
