import { authActions } from '../actions/authActions'

export const initialState = {
    fetching: false,
    user: null,
    isAuth: false,
    error: null,
    authChange: null,
}

export function authReducer(state, actions) {
    switch (actions.type) {
        case authActions.LOGIN:
            return {
                ...state,
                fetching: true,
            }

        case authActions.LOGIN_SUCCESS:
            return {
                ...state,
                fetching: false,
                isAuth: true
            }

        case authActions.LOGIN_ERROR:
            return {
                ...state,
                fetching: false,
                error: actions.payload
            }

        case authActions.REGISTER:
            return {
                ...state,
                fetching: true
            }

        case authActions.REGISTER_SUCCESS:
            return {
                ...state,
                fetching: false,
                isAuth: true
            }

        case authActions.REGISTER_ERROR:
            return {
                ...state,
                fetching: false,
                error: actions.payload
            }


        case authActions.AUTH_STATE_CHANGE:
            return {
                ...state,
                authChange: true
            }

        case authActions.AUTH_STATE_CHANGE_SUCCESS:
            return {
                ...state,
                authChange: false,
                isAuth: true,
                user: actions.payload
            }

        case authActions.AUTH_STATE_CHANGE_ERROR:
            return {
                ...state,
                authChange: false,
                error: actions.payload
            }

        case authActions.CURRENT_USER:
            return {
                ...state,
                fetching: true,
            }

        case authActions.CURRENT_USER_SUCCESS:
            return {
                ...state,
                fetching: false,
                user: actions.payload
            }

        case authActions.CURRENT_USER_ERROR:
            return {
                ...state,
                fetching: false,
                error: actions.payload
            }

        case authActions.LOGOUT:
            return {
                ...state,
                isAuth: false,
                user: null
            }

        case authActions.CLEAR_ERROR:
            return {
                ...state,
                error: null
            }

        case authActions.CLEAR_STATE:
            return {
                fetching: false,
                user: null,
                isAuth: false,
                error: null,
                authChange: null,
            }

        case authActions.CLEAR_CURRENT:
            return {
                ...state,
                user: null
            }

        default:
            return state
    }
}