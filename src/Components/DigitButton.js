import React from "react"
import { ACTIONS } from '../reducer'

function DigitButton({ digit, dispatch }) {
    return (
        <button
            aria-label={digit}
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
        >
            {digit}
        </button>
    )
}

export default DigitButton
