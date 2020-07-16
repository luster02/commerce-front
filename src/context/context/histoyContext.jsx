import React, { useMemo, useReducer } from 'react'
import Axios from 'axios'
import { initialState, historyReducer } from '../reducer/historyReducer'
import { historyActions } from '../actions/historyActions'
import { heroku, getToken } from '../../global/'

const HistoryContext = React.createContext()

export function HistoryProvider(props) {
    const [state, dispatch] = useReducer(historyReducer, initialState)

    async function getHistoryByOrg(id) {
        try {
            dispatch({ type: historyActions.GET_HISTORY_BY_ORG })
            const token = getToken()
            const res = await Axios.get(`${heroku}/history/getHistoryByOrg/${id}`, { headers: { 'authorization': token } })
            if (res.data.ok === true) {
                dispatch({ type: historyActions.GET_HISTORY_BY_ORG_SUCCESS, payload: res.data.data })
            } else {
                dispatch({ type: historyActions.GET_HISTORY_BY_ORG_ERROR, payload: 'server error' })
            }
        } catch (error) {
            console.log(error)
            dispatch({ type: historyActions.GET_HISTORY_BY_ORG_ERROR, payload: error })
        }
    }

    async function getOne(id) {
        try {
            dispatch({ type: historyActions.GET_ONE_HISTORY })
            const token = getToken()
            const res = await Axios.get(`${heroku}/history/one/${id}`, { headers: { 'authorization': token } })
            if (res.data.ok === true) {
                dispatch({ type: historyActions.GET_ONE_HISTORY_SUCCESS, payload: res.data.data })
            } else {
                dispatch({ type: historyActions.GET_ONE_HISTORY_ERROR, payload: 'server error' })
            }
        } catch (error) {
            console.log(error)
            dispatch({ type: historyActions.GET_ONE_HISTORY_ERROR, payload: 'server error' })
        }
    }

    async function updateHistory(id, data) {
        try {
            dispatch({ type: historyActions.UPDATE_HISTORY })
            const token = getToken()
            const res = await Axios.patch(`${heroku}/history/update/${id}`, data, { headers: { 'authorization': token } })
            if (res.data.ok === true) {
                dispatch({ type: historyActions.UPDATE_HISTORY_SUCCESS, payload: res.data.data })
            } else {
                dispatch({ type: historyActions.UPDATE_HISTORY_ERROR, payload: 'server error' })
            }
        } catch (error) {
            console.log(error)
            dispatch({ type: historyActions.UPDATE_HISTORY_ERROR, payload: error })
        }
    }

    const value = useMemo(() => {
        return {
            state,
            getHistoryByOrg,
            getOne,
            updateHistory,
        }
    }, [state])

    return <HistoryContext.Provider value={value} {...props} />
}

export function useHistory() {
    const context = React.useContext(HistoryContext)
    if (!context) {
        return new Error('useOrg is out provider')
    }
    return context
}