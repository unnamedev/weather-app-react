import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
// 💡 Components
import Welcome from "./pages/Welcome/Welcome"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import NotFound from "./pages/NotFound/NotFound"
import Alert from "./components/Alert/Alert"
// 💡 Context
import {WeatherProvider} from "./context/WeatherContext"
import {AlertProvider} from "./context/AlertContext"

const Weather = () =>
    <WeatherProvider>
        <AlertProvider>
            <Router>
                <Routes>
                    <Route path="/" exact element={<Welcome/>}/>
                    <Route path="/home" exact element={<Home/>}/>
                    <Route path="/about" exact element={<About/>}/>
                    <Route path="/*" exact element={<NotFound/>}/>
                </Routes>
            </Router>
            <Alert/>
        </AlertProvider>
    </WeatherProvider>

export default Weather
