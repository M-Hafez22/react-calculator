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
            return {
                ...state,
                current: `${state.current || ""}${payload.digit}`,
                result: null,
            }
        default:
            return { state }
    }
}