import {createContext, useReducer} from "react"
// 💡 Alert Context
export const AlertContext = createContext()
// 💡 Alert Provider
export const AlertProvider = ({children}) => {
    // ⚙️ Initial State
    const initialState = null

    // ⚙️ Alert Reducer
    const reducer = (state, action) => {
        switch (action.type) {
            case "SET_ALERT":
                return action.payload
            case "REMOVE_ALERT":
                return null
            default:
                return state
        }
    }

    /**
     * Set alert message
     * @param message
     * @param type
     */
    const setAlert = (message = "", type = "") => {
        dispatch({type: "SET_ALERT", payload: {message, type}})
        setTimeout(() => dispatch({type: "REMOVE_ALERT"}), 3000)
    }

    // ⚙️ Alert Reducer Init
    const [state, dispatch] = useReducer(reducer, initialState)

    return <AlertContext.Provider value={{alert: state, setAlert}}>{children}</AlertContext.Provider>
}