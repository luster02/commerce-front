import React, { useMemo, useReducer } from 'react'
import Axios from 'axios'
import { initialState, orgReducer } from '../reducer/orgReducer'
import { orgActions } from '../actions/orgActions'
import { heroku, getToken } from '../../global/'

const OrgContext = React.createContext()

export function OrgProvider(props) {
    const [state, dispatch] = useReducer(orgReducer, initialState)

    async function getOrgByOwner(owner) {
        try {
            dispatch({ type: orgActions.GET_ORG_BY_OWNER })
            const token = getToken()
            const res = await Axios.get(`${heroku}/org/owner/${owner}`, { headers: { 'authorization': token } })
            if (res.data.ok === true && res.data.data) {
                // console.log(res.data)
                dispatch({ type: orgActions.GET_ORG_BY_OWNER_SUCCESS, payload: res.data.data })
            } else {
                dispatch({ type: orgActions.UPDATE_ORG_ERROR, payload: 'server error' })
            }
        } catch (error) {
            console.log(error)
            // console.log('type:', error.message)
            // console.log('data:', error.response.data)
            dispatch({ type: orgActions.UPDATE_ORG_ERROR, payload: error })
        }
    }

    async function createOrg(org) {
        try {
            dispatch({ type: orgActions.CREATE_ORG })
            const token = getToken()
            const res = await Axios.post(`${heroku}/org/`, org, { headers: { 'authorization': token } })
            if (res.data.ok === true) {
                dispatch({ type: orgActions.CREATE_ORG_SUCCESS, payload: res.data.data })
            } else {
                dispatch({ type: orgActions.CREATE_ORG_ERROR, payload: 'server error' })
            }
        } catch (error) {
            console.log(error)
            dispatch({ type: orgActions.CREATE_ORG_ERROR, payload: error })
        }
    }

    async function updateOrg(id, org) {
        try {
            dispatch({ type: orgActions.UPDATE_ORG })
            const token = getToken()
            const res = await Axios.patch(`${heroku}/org/${id}`, org, { headers: { 'authorization': token } })
            if (res.data.ok === true) {
                dispatch({ type: orgActions.UPDATE_ORG_SUCCESS, payload: res.data.data })
                return true
            } else {
                dispatch({ type: orgActions.UPDATE_ORG_ERROR, payload: 'server error' })
                return false
            }
        } catch (error) {
            console.log(error)
            dispatch({ type: orgActions.UPDATE_ORG_ERROR, payload: error })
            return false
        }
    }

    async function updateOrgLogo(id, file) {
        try {
            dispatch({ type: orgActions.UPDATE_ORG_LOGO })
            const token = getToken()
            const res = await Axios.patch(`${heroku}/org/logo/${id}`, file, { headers: { 'authorization': token } })
            if (res.data.ok === true) {
                dispatch({ type: orgActions.UPDATE_ORG_LOGO_SUCCESS, payload: res.data.data })
                return true
            } else {
                dispatch({ type: orgActions.UPDATE_ORG_LOGO_ERROR, payload: 'server error' })
                return false
            }
        } catch (error) {
            console.log(error)
            dispatch({ type: orgActions.UPDATE_ORG_LOGO_ERROR, payload: error })
            return false
        }
    }

    function clearError() {
        dispatch({ type: orgActions.CLEAR_ERROR })
    }

    function clearCurrent() {
        dispatch({ type: orgActions.CLEAR_CURRENT })
    }

    function clearState() {
        dispatch({ type: orgActions.CLEAR_STATE })
    }

    const value = useMemo(() => {
        return {
            state,
            getOrgByOwner,
            createOrg,
            updateOrg,
            updateOrgLogo,
            clearError,
            clearCurrent,
            clearState,
        }
    }, [state])

    return <OrgContext.Provider value={value} {...props} />
}

export function useOrg() {
    const context = React.useContext(OrgContext)
    if (!context) {
        return new Error('useOrg is out provider')
    }
    return context
}