import { historyActions } from '../actions/historyActions'

export const initialState = {
    fetching: false,
    current: {},
    array: [],
    error: null
}

export function historyReducer(state, actions) {
    switch (actions.type) {
        case historyActions.GET_HISTORY_BY_ORG:
            return {
                ...state,
                fetching: true
            }

        case historyActions.GET_HISTORY_BY_ORG_SUCCESS:
            return {
                ...state,
                fetching: false,
                array: actions.payload
            }

        case historyActions.GET_HISTORY_BY_ORG_ERROR:
            return {
                ...state,
                fetching: false,
                error: actions.payload
            }

        case historyActions.GET_ONE_HISTORY:
            return {
                ...state,
                fetching: true
            }

        case historyActions.GET_ONE_HISTORY_SUCCESS:
            return {
                ...state,
                fetching: false,
                current: actions.payload
            }

        case historyActions.GET_ONE_HISTORY_ERROR:
            return {
                ...state,
                fetching: false,
                error: actions.payload
            }

        case historyActions.UPDATE_HISTORY:
            return {
                ...state,
                fetching: true
            }

        case historyActions.UPDATE_HISTORY_SUCCESS:
            return {
                ...state,
                fetching: false,
            }

        case historyActions.UPDATE_HISTORY_ERROR:
            return {
                ...state,
                fetching: false,
                error: actions.payload
            }

        default:
            return state
    }
}