import React, { useMemo, useReducer, useState, useEffect } from 'react'
import Axios from 'axios'
import { authReducer, initialState } from '../reducer/loginReducer'
import { authActions } from '../actions/authActions'
import { deleteToken, saveToken, getToken, heroku } from '../../global'

const AuthContext = React.createContext()

export function AuthProvider(props) {
    const [state, dispatch] = useReducer(authReducer, initialState)
    const [Reload, setReload] = useState(false)

    useEffect(() => {
        setReload(false)
        async function isLogged() {
            if (!getToken) {
                return null
            }
            onAuthStateChange()
        }
        isLogged()
    }, [Reload])


    async function login(body) {
        try {
            dispatch({ type: authActions.LOGIN })
            const res = await Axios.post(`${heroku}/auth/signin`, body)
            if (res.data.ok === true) {
                setReload(true)
                await saveToken(res.data.data.token)
                setTimeout(() => {
                    dispatch({ type: authActions.LOGIN_SUCCESS })
                    return null
                }, 1000)
            }
        } catch (error) {
            if (error.response) {
                // Request made and server responded
                console.log(error.response.data);
                dispatch({ type: authActions.LOGIN_ERROR, payload: error })
                return error.response.status
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch({ type: authActions.LOGIN_ERROR, payload: error })
                return null
            }
        }
    }

    async function registerUser(body) {
        try {
            dispatch({ type: authActions.REGISTER })
            const res = await Axios.post(`${heroku}/auth/signup`, body)
            if (res.data.ok === true) {
                setReload(true)
                await saveToken(res.data.data.token)
                setTimeout(() => {
                    dispatch({ type: authActions.REGISTER_SUCCESS })
                }, 1000)
            }
        } catch (error) {
            console.error(error)
            dispatch({ type: authActions.REGISTER_ERROR, payload: error })
        }
    }

    async function currentUser() {
        try {
            dispatch({ type: authActions.CURRENT_USER })
            const token = await getToken() || ''
            const res = await Axios.get(`${heroku}/user/current`, { headers: { 'authorization': token } })
            if (res.data.ok === true && res.data.data) {
                // console.log(res.data.data)
                dispatch({ type: authActions.CURRENT_USER_SUCCESS, payload: res.data.data })
                return res.data.data
            }
            return null
        } catch (error) {
            console.error(error)
            dispatch({ type: authActions.CURRENT_USER_ERROR, payload: error })
            return null
        }
    }

    async function onAuthStateChange() {
        try {
            dispatch({ type: authActions.AUTH_STATE_CHANGE })
            const token = await getToken() || ''
            const res = await Axios.get(`${heroku}/user/current`, { headers: { 'authorization': token } })
            if (res.data.ok === true && res.data.data) {
                dispatch({ type: authActions.AUTH_STATE_CHANGE_SUCCESS })
            }
        } catch (error) {
            console.log(error)
            dispatch({ type: authActions.AUTH_STATE_CHANGE_ERROR, payload: error })
        }
    }

    function logOut() {
        deleteToken()
        dispatch({ type: authActions.LOGOUT })
    }

    function clearCurrent() {
        dispatch({ type: authActions.CLEAR_CURRENT })
    }

    function clearError() {
        dispatch({ type: authActions.CLEAR_ERROR })
    }

    function clearState() {
        dispatch({ type: authActions.CLEAR_STATE })
    }

    const value = useMemo(() => {
        return {
            state,
            login,
            registerUser,
            currentUser,
            onAuthStateChange,
            logOut,
            clearCurrent,
            clearError,
            clearState,

        }
    }, [state])

    return <AuthContext.Provider value={value} {...props} />
}

export function useAuth() {
    const context = React.useContext(AuthContext)
    if (!context) {
        return new Error('useAuth is out Provider')
    }
    return context
}