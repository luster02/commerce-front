import { productActions } from '../actions/productActions'

export const initialState = {
    fetching: false,
    current: {},
    array: [],
    error: null
}

export function productReducer(state, actions) {
    switch (actions.type) {
        case productActions.GET_ONE_PRODUCT:
            return {
                ...state,
                fetching: true
            }

        case productActions.GET_ONE_PRODUCT_SUCCESS:
            return {
                ...state,
                fetching: false,
                current: actions.payload
            }

        case productActions.GET_ONE_PRODUCT_ERROR:
            return {
                ...state,
                fetching: false,
                error: actions.payload
            }

        case productActions.CREATE_PRODUCT:
            return {
                ...state,
                fetching: true
            }

        case productActions.CREATE_PRODUCT_SUCCESS:
            return {
                ...state,
                fetching: false,
            }

        case productActions.CREATE_PRODUCT_ERROR:
            return {
                ...state,
                fetching: false,
                error: actions.payload
            }

        case productActions.UPDATE_PRODUCT:
            return {
                ...state,
                fetching: true
            }

        case productActions.UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                fetching: false,
                current: actions.payload
            }

        case productActions.UPDATE_PRODUCT_ERROR:
            return {
                ...state,
                fetching: false,
                error: actions.payload
            }

        case productActions.UPDATE_PRODUCT_IMAGE:
            return {
                ...state,
                fetching: true
            }

        case productActions.UPDATE_PRODUCT_IMAGE_SUCCESS:
            return {
                ...state,
                fetching: false,
                current: actions.payload
            }

        case productActions.UPDATE_PRODUCT_IMAGE_ERROR:
            return {
                ...state,
                fetching: false,
                error: actions.payload
            }

        case productActions.DELETE_PRODUCT:
            return {
                ...state,
                fetching: true
            }

        case productActions.DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                fetching: false
            }

        case productActions.DELETE_PRODUCT_ERROR:
            return {
                ...state,
                fetching: false,
                error: actions.payload
            }

        case productActions.CLEAR_CURRENT:
            return {
                ...state,
                current: {}
            }

        case productActions.CLEAR_ERROR:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}