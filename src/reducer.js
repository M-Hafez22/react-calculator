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
        case ACTIONS.CLEAR:
            return {}
        case ACTIONS.DELETE_DIGIT:
            // if the console show a result clear the console
            if (state.result) { return {} }
            // if the console show the previous value and the operator only 
            if (state.current == null) { return state }
            return {
                ...state,
                current: state.current.slice(0, -1),
            }
        case ACTIONS.CHOOSE_OPERATOR:
            if (state.current == null && state.previous == null && state.result == null) { return state }
            if (state.current == null && state.previous == null) {
                return { ...state, previous: state.result, result: null, operator: payload.operator }
            }
            if (state.previous == null) {
                return {
                    ...state,
                    operator: payload.operator,
                    previous: state.current,
                    current: null,
                }
            }
            if (state.current == null) {
                return {
                    ...state,
                    operator: payload.operator,
                }
            }
            return {
                ...state,
                previous: evaluate(state),
                operator: payload.operator,
                current: null,
            }
        case ACTIONS.EVALUATE:
            if (
                state.current == null ||
                state.previous == null ||
                state.operator == null
            )
                return state
            return {
                ...state,
                current: null,
                previous: null,
                operator: null,
                result: evaluate(state),
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