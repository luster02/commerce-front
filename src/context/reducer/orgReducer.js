import { orgActions } from '../actions/orgActions'

export const initialState = {
    fetching: false,
    array: [],
    current: {},
    error: null
}

export function orgReducer(state, actions) {
    switch (actions.type) {
        case orgActions.GET_ORG_BY_OWNER:
            return {
                ...state,
                fetching: true
            }

        case orgActions.GET_ORG_BY_OWNER_SUCCESS:
            return {
                ...state,
                fetching: false,
                current: actions.payload
            }

        case orgActions.GET_ORG_BY_OWNER_ERROR:
            return {
                ...state,
                fetching: false,
                error: actions.payload
            }

        case orgActions.CREATE_ORG:
            return {
                ...state,
                fetching: true
            }

        case orgActions.CREATE_ORG_SUCCESS:
            return {
                ...state,
                fetching: false,
                current: actions.payload
            }

        case orgActions.CREATE_ORG_ERROR:
            return {
                ...state,
                fetching: false,
                error: actions.payload
            }

        case orgActions.UPDATE_ORG:
            return {
                ...state,
                fetching: true
            }

        case orgActions.UPDATE_ORG_SUCCESS:
            return {
                ...state,
                fetching: false,
                current: actions.payload
            }

        case orgActions.UPDATE_ORG_ERROR:
            return {
                ...state,
                fetching: false,
                error: actions.payload
            }

        case orgActions.UPDATE_ORG_LOGO:
            return {
                ...state,
                fetching: true
            }

        case orgActions.UPDATE_ORG_LOGO_SUCCESS:
            return {
                ...state,
                fetching: false,
                current: actions.payload
            }

        case orgActions.UPDATE_ORG_LOGO_ERROR:
            return {
                ...state,
                fetching: false,
                error: actions.payload
            }

        case orgActions.CLEAR_CURRENT:
            return {
                ...state,
                current: {}
            }
        case orgActions.CLEAR_ERROR:
            return {
                ...state,
                error: null
            }
        case orgActions.CLEAR_STATE:
            return {
                fetching: false,
                array: [],
                current: {},
                error: null
            }

        default:
            return state
    }
}