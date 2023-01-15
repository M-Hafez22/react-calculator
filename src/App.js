import React from "react"
import DigitButton from "./Components/DigitButton"
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="output"></div>
      <div className="numberpad">
        <DigitButton digit="1" />
        <DigitButton digit="2" />
        <DigitButton digit="3" />
        <DigitButton digit="4" />
        <DigitButton digit="5" />
        <DigitButton digit="6" />
        <DigitButton digit="7" />
        <DigitButton digit="8" />
        <DigitButton digit="9" />
        <DigitButton digit="." />
        <DigitButton digit="0" />
      </div>
    </div>
  )
}

export default App
