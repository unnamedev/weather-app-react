import React, {useContext, useState} from "react"
import {AiOutlineSearch} from "react-icons/ai"
// 💡 Style
import "./Form.scss"
// 💡 Helpers
import {fetchWeather} from "../../helpers/helpers"
// 💡 Context
import {WeatherContext} from "../../context/WeatherContext"
import {AlertContext} from "../../context/AlertContext";

const Form = () => {
    const [query, setQuery] = useState("")
    const {dispatch} = useContext(WeatherContext)
    const {setAlert} = useContext(AlertContext)

    /**
     * Handle form submit
     * @param e - event
     * @returns {Promise<void>}
     */
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!query) {
            setAlert("Please enter something", "show")
        } else {
            const city = await fetchWeather(query)
            localStorage.setItem("city", JSON.stringify(city))
            dispatch({type: "FETCH_WEATHER", payload: city})
            setQuery("")
        }
    }

    return <form className="search-form" onSubmit={handleSubmit}>
        <input
            className="search-form__input"
            type="text"
            name="query"
            value={query}
            placeholder="Enter city name..."
            autoComplete="off"
            onChange={e => setQuery(e.target.value)}
        />
        <AiOutlineSearch className="search-form__ico" size={30}/>
    </form>
}

export default Form
