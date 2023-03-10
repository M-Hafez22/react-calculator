import React, { useReducer } from "react"
import DigitButton from "./Components/DigitButton"
import OperatorButton from "./Components/OperatorButton"
import { reducer, ACTIONS } from "./reducer"
import "./App.css"

function App() {
  const [{ current, previous, operator, result }, dispatch] = useReducer(
    reducer,
    {}
  )
  return (
    <div className="Calc">
      <div className="output">
        {result ? (
          <div className="result" data-testid="result">
            {result}
          </div>
        ) : (
          <div>
            <div className="previous" data-testid="previous">
              {previous} {operator}
            </div>
            <div className="current" data-testid="current">
              {current}
            </div>{" "}
          </div>
        )}
      </div>
      <div className="numberpad">
        <button className="span-two" onClick={() => dispatch({ type: ACTIONS.CLEAR })}>AC</button>
        <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>Del</button>
        <OperatorButton operator="÷" dispatch={dispatch} />
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <OperatorButton operator="*" dispatch={dispatch} />
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <OperatorButton operator="+" dispatch={dispatch} />
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <OperatorButton operator="-" dispatch={dispatch} />
        <DigitButton digit="." dispatch={dispatch} />
        <DigitButton digit="0" dispatch={dispatch} />
        <button className="span-two" onClick={() => dispatch({ type: ACTIONS.EVALUATE })}> = </button>
      </div>
    </div>
  )
}

export default App
