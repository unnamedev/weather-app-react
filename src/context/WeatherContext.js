import {createContext, useEffect, useReducer} from "react"
import {getDate} from "../helpers/helpers"
// 💡 Weather Context
export const WeatherContext = createContext()
// 💡 Weather Provider
export const WeatherProvider = ({children}) => {
    // ⚙️ Initial State
    const initialState = {
        date: getDate(),
        city: localStorage.getItem("city") ? JSON.parse(localStorage.getItem("city")) : null,
        dark: localStorage.getItem("dark") ? JSON.parse(localStorage.getItem("dark")) : false
    }

    // ⚙️ Weather Reducer
    const reducer = (state, action) => {
        switch (action.type) {
            case "FETCH_WEATHER":
                return {
                    ...state,
                    city: action.payload
                }
            case "CHANGE_THEME":
                return {
                    ...state,
                    dark: !state.dark
                }
            default :
                return state
        }
    }

    // ⚙️ Weather Reducer Init
    const [state, dispatch] = useReducer(reducer, initialState)


    useEffect(() => {
        document.body.dataset["theme"]  = state.dark ?  "dark-theme" : "light-theme"
    }, [state.dark])

    return <WeatherContext.Provider value={{...state, dispatch}}>{children}</WeatherContext.Provider>
}