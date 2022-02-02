import axios from "axios"

/**
 * Get date
 * @returns {`${string}, ${string}, ${number}`}
 */
export const getDate = () => {
    // ⚙️ Days of the week
    const weekdayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const weekDay = weekdayList[new Date().getDay()]
    return `${weekDay}, ${new Date().toLocaleString("en-En", {day: "2-digit"})}, ${new Date().getFullYear()}`
}

export const getDays = (date) => {
    // ⚙️ Days of the week
    const weekdayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const weekDay = weekdayList[new Date(date).getDay()]
    return `${weekDay}, ${new Date(date).toLocaleString("en-En", {day: "2-digit"})}`
}

export const getHour = (time) => {
    const d = new Date(time)
    const hour = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours()
    const minutes = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes()
    return `${hour}:${minutes}`
}
/**
 * Axios setup
 * @type {AxiosInstance}
 */
export const fetchWeather = async (city) => {
    const params = new URLSearchParams({q: city})
    const response = await axios.get(`${process.env.REACT_APP_WEATHER_BASE_URL}?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${params}&days=5&aqi=no&alerts=no`)
    return response.data
}