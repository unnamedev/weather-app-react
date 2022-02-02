import React, {useContext} from "react"
// 💡 Style
import "./Alert.scss"
// 💡 Context
import {AlertContext} from "../../context/AlertContext";

const Alert = () => {
    const {alert} = useContext(AlertContext)
    return alert !== null && <div className="alert show">{alert.message}</div>
}

export default Alert
