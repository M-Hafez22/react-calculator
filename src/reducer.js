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
            return {
                ...state,
                current: `${state.current || ""}${payload.digit}`,
                result: null,
            }
        default:
            return { state }
    }
}