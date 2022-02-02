import React, {useContext} from "react"
import {FaMoon, FaRegMoon} from "react-icons/fa"
// 💡 Style
import "./ModeSwitcher.scss"
// 💡 Context
import {WeatherContext} from "../../context/WeatherContext"

const ModeSwitcher = () => {
    const {dark, dispatch} = useContext(WeatherContext)

    /** Handle click */
    const handleClick = () => {
        localStorage.setItem("dark", JSON.stringify(!dark))
        dispatch({type: "CHANGE_THEME"})
    }

    return <button className="mode-switcher" onClick={handleClick}>
        {dark === true && <FaMoon className="mode-switcher__ico" size={30} color="#f9de59"/>}
        {dark === false && <FaRegMoon className="mode-switcher__ico" size={30}/>}
    </button>
}

export default ModeSwitcher
