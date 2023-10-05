import "./main.scss"
import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import data from "./constants/data"

const specialEasterEggFAQ = 4

ReactDOM.render(
  <App 
    faqArray={data} 
    specialEasterEggFAQ={specialEasterEggFAQ}
  />,
  document.getElementById("app")
)
