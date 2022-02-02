import React, {useContext} from "react"
import {AiOutlineLink} from "react-icons/ai"
import {Link} from "react-router-dom"
// 💡 Style
import "./Home.scss"
// 💡 Context
import {WeatherContext} from "../../context/WeatherContext"
// 💡 Components
import Form from "../../components/Form/Form"
import Result from "../../components/Result/Result"
import ModeSwitcher from "../../components/ModeSwitcher/ModeSwitcher"

const Home = () => {
    const {date} = useContext(WeatherContext)

    return <section className="page-home">
        <div className="container">
            {/* Top Line */}
            <div className="page-home__top">
                <p className="page-home__top-date">{date}</p>
                <Link to="/about">
                    <AiOutlineLink className="page-home__top-ico" size={35}/>
                </Link>
                <div className="page-home__top-switcher">
                    <ModeSwitcher/>
                </div>
            </div>
            {/* Form */}
            <Form/>
            {/* Search Result */}
            <Result/>
        </div>
    </section>
}

export default Home
