export const ACTIONS = {
    ADD_DIGIT: "add-digit",
    CHOOSE_OPERATOR: "choose-operator",
    CLEAR: "clear",
    DELETE_DIGIT: "delete-digit",
    EVALUATE: "evaluate",
}

export const reducer = (state, { type, payload }) => {
    switch (type) {
        case ACTIONS.ADD_DIGIT:
            // Prevent showing multiple 0
            if (payload.digit === "0" && state.current === "0") { return state }
            // Print "0." when type "."
            if (payload.digit === "." && state.current === undefined) { return { ...state, current: "0." } }
            // Prevent showing multiple "."
            if (
                payload.digit === "." &&
                state.current.includes(".") &&
                state.current.lenght !== 0
            ) { return state }
            return {
                ...state,
                current: `${state.current || ""}${payload.digit}`,
                result: null,
            }
        default:
            return { state }
    }
}

function evaluate({ current, previous, operator }) {
    const c = parseFloat(current)
    const p = parseFloat(previous)
    if (isNaN(c) || isNaN(p)) return ""
    let result
    switch (operator) {
        case "÷":
            result = p / c
            break
        case "+":
            result = p + c
            break
        case "-":
            result = p - c
            break
        case "*":
            result = p * c
            break
        default:
            return result
    }
    return result.toString()
}