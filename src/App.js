import React from "react"
import DigitButton from "./Components/DigitButton"
import OperatorButton from "./Components/OperatorButton"
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="output"></div>
      <div className="numberpad">
        <OperatorButton operator="÷" />
        <DigitButton digit="1" />
        <DigitButton digit="2" />
        <DigitButton digit="3" />
        <OperatorButton operator="*" />
        <DigitButton digit="4" />
        <DigitButton digit="5" />
        <DigitButton digit="6" />
        <OperatorButton operator="+" />
        <DigitButton digit="7" />
        <DigitButton digit="8" />
        <DigitButton digit="9" />
        <OperatorButton operator="-" />
        <DigitButton digit="." />
        <DigitButton digit="0" />
      </div>
    </div>
  )
}

export default App
