import React, { useReducer, useMemo } from 'react'
import Axios from 'axios'
import { initialState, productReducer } from '../reducer/productReducer'
import { productActions } from '../actions/productActions'
import { heroku, getToken } from '../../global/'

const ProductContext = React.createContext()

export function ProductProvider(props) {
    const [state, dispatch] = useReducer(productReducer, initialState)

    async function getOneProduct(id) {
        try {
            dispatch({ type: productActions.GET_ONE_PRODUCT })
            const token = getToken()
            const res = await Axios.get(`${heroku}/product/${id}`, { headers: { 'authorization': token } })
            if (res.data.ok === true) {
                dispatch({ type: productActions.GET_ONE_PRODUCT_SUCCESS, payload: res.data.data })
            } else {
                dispatch({ type: productActions.GET_ONE_PRODUCT_ERROR, payload: 'server error' })
            }
        } catch (error) {
            console.log(error)
            dispatch({ type: productActions.GET_ONE_PRODUCT_ERROR, payload: error })
        }
    }

    async function createProduct(id, product) {
        try {
            dispatch({ type: productActions.CREATE_PRODUCT })
            const token = getToken()
            const res = await Axios.post(`${heroku}/product/${id}`, product, { headers: { 'authorization': token } })
            if (res.data.ok === true) {
                dispatch({ type: productActions.CREATE_PRODUCT_SUCCESS, payload: res.data.data })
            } else {
                dispatch({ type: productActions.CREATE_PRODUCT_ERROR, payload: 'server error' })
            }
        } catch (error) {
            console.log(error)
            dispatch({ type: productActions.CREATE_PRODUCT_ERROR, payload: error })
        }
    }

    async function updateProduct(id, product) {
        try {
            dispatch({ type: productActions.UPDATE_PRODUCT })
            const token = getToken()
            const res = await Axios.patch(`${heroku}/product/${id}`, product, { headers: { 'authorization': token } })
            if (res.data.ok === true) {
                dispatch({ type: productActions.UPDATE_PRODUCT_SUCCESS, payload: res.data.data })
            } else {
                dispatch({ type: productActions.UPDATE_PRODUCT_ERROR, payload: 'server error' })
            }
        } catch (error) {
            console.log(error)
            dispatch({ type: productActions.UPDATE_PRODUCT_ERROR, payload: error })
        }
    }

    async function updateImage(id, file) {
        try {
            dispatch({ type: productActions.UPDATE_PRODUCT_IMAGE })
            const token = getToken()
            const res = await Axios.patch(`${heroku}/product/img/${id}`, file, { headers: { 'authorization': token } })
            if (res.data.ok === true) {
                dispatch({ type: productActions.UPDATE_PRODUCT_IMAGE_SUCCESS, payload: res.data.data })
            } else {
                dispatch({ type: productActions.UPDATE_PRODUCT_IMAGE_ERROR, payload: 'server error' })
            }
        } catch (error) {
            console.log(error)
            dispatch({ type: productActions.UPDATE_PRODUCT_IMAGE_ERROR, payload: error })
        }
    }

    async function deleteProduct(orgId, productId) {
        try {
            dispatch({ type: productActions.DELETE_PRODUCT })
            const token = getToken()
            const res = await Axios.delete(`${heroku}/product/${orgId}/${productId}`, { headers: { 'authorization': token } })
            if (res.data.ok === true) {
                dispatch({ type: productActions.DELETE_PRODUCT_SUCCESS })
            } else {
                dispatch({ type: productActions.DELETE_PRODUCT_ERROR, payload: 'server error' })
            }
        } catch (error) {
            console.log(error)
            dispatch({ type: productActions.DELETE_PRODUCT_ERROR, payload: error })
        }
    }

    const value = useMemo(() => {
        return {
            state,
            getOneProduct,
            createProduct,
            updateProduct,
            updateImage,
            deleteProduct,
        }
    }, [state])

    return <ProductContext.Provider value={value} {...props} />
}

export function useProduct() {
    const context = React.useContext(ProductContext)
    if (!context) {
        return new Error('useProduct is out provider')
    }
    return context
}