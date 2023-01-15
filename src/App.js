import React from "react"
import DigitButton from "./Components/DigitButton"
import OperatorButton from "./Components/OperatorButton"
import "./App.css"

function App() {
  return (
    <div className="Calc">
      <div className="output">
        {false ? (
          <div className="result">155</div>
        ) : (
          <div>
            <div className="previous">55 +</div>
            <div className="current">100</div>{" "}
          </div>
        )}
      </div>
      <div className="numberpad">
        <button className="span-two">AC</button>
        <button>Del</button>
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
        <button className="span-two"> = </button>
      </div>
    </div>
  )
}

export default App
