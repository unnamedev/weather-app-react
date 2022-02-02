import React, {useContext, useState} from "react"
import SimpleBar from "simplebar-react"
import "simplebar/dist/simplebar.min.css"
import {IoIosArrowUp} from "react-icons/io"
// 💡 Style
import "./Result.scss"
// 💡 Helpers
import {getDays, getHour} from "../../helpers/helpers"
// 💡 Context
import {WeatherContext} from "../../context/WeatherContext"

const Result = () => {
    const {city} = useContext(WeatherContext)
    const [show, setShow] = useState(false)

    if (city !== null) {
        const {current, forecast, location} = city

        return <div className="result">
            {/* Location */}
            <div className="title title-1">{location.name}</div>
            {/* Condition */}
            <div className="result__condition">
                <img className="result__condition-ico" src={current.condition.icon}
                     alt={current.condition.text}/>
                <p className="result__condition-text">{current.condition.text}</p>
                <p className="result__condition-temp"><span>{current.temp_c}</span><sup>&deg;</sup></p>
            </div>
            {/* Hours */}
            <div className="result__hours">
                <SimpleBar style={{maxHeight: 300}}>
                    {forecast.forecastday[0].hour.map((hour, idx) => (
                        <div className="result__hours-item" key={idx}>
                            <p className="result__hours-time">{getHour(hour.time)}</p>
                            <p className="result__hours-temp">{hour.temp_c}<sup>&deg;</sup></p>
                            <img src={hour.condition.icon} alt={hour.condition.text}/>
                        </div>
                    ))}
                </SimpleBar>
            </div>
            {/* Day */}
            <div className="result__day">
                <div className="result__day-column">
                    <p className="result__day-name">Feels like</p>
                    <p className="result__day-value">{current.feelslike_c}<sup>&deg;</sup></p>
                </div>
                <div className="result__day-column">
                    <p className="result__day-name">Humidity</p>
                    <p className="result__day-value">{`${current.humidity} %`}</p>
                </div>
                <div className="result__day-column">
                    <p className="result__day-name">Wind</p>
                    <p className="result__day-value">{`${current.wind_mph} m/s`}</p>
                </div>
                <div className="result__day-column">
                    <p className="result__day-name">Wind dir</p>
                    <p className="result__day-value">{current.wind_dir}</p>
                </div>
                <div className="result__day-column">
                    <p className="result__day-name">UV</p>
                    <p className="result__day-value">{current.uv}</p>
                </div>
            </div>
            {/* Days */}
            <div className={`result__days ${show ? "is-open" : ""}`} onClick={() => setShow(prev => !prev)}>
                <IoIosArrowUp className="result__days-up" size={40}/>
                <ul className="result__days-list">
                    {forecast.forecastday.map((day, idx) => (
                        <li key={idx} className="result__days-item">
                            <p className="result__days-date">{getDays(day.date)}</p>
                            <div className="result__days-info">
                                <img src={day.day.condition.icon} alt={day.day.condition.text}/>
                                <p>{day.day.maxtemp_c}<sup>&deg;</sup></p>
                                <p>{day.day.mintemp_c}<sup>&deg;</sup></p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    } else {
        return null
    }
}

export default Result
