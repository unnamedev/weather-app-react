import React from "react"
import {render} from "react-dom"
// 💡 Root Style
import "./styles/index.scss"
// 💡 Root Component
import Weather from "./Weather"
// 💡 Render Components
render(<Weather/>, document.getElementById("root"))