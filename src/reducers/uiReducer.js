import { types } from "../types/types"

const initialState = {
    loadiing: false,
    msgError: null
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uniStartLoading:
            return {
                ...state,
                loading: true
            }
        case types.uiFinishLoading:
            return {
                ...state,
                loading: false
            }
        case types.uiSetError:
            return {
                ...state,
                msgError: action.payload
            }
        case types.uiRemoveError:
            return {
                ...state,
                msgError: null
            }
        default:
            return state;
    }
}