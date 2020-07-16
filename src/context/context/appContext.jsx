import React, { useCallback, useState } from 'react'
import { useAuth } from './loginContext'
import { useOrg } from './orgContext'
import { objectValidator } from '../../helpers/validators'

const AppContext = React.createContext()

export function AppProvider(props) {
    const org = useOrg()
    const auth = useAuth()
    const [ShopModal, setShopModal] = useState(false)
    const stableGetCurrent = useCallback(auth.currentUser, [])
    const stableGetOrg = useCallback(org.getOrgByOwner, [])

    async function getCurrentOrg() {
        const user = await stableGetCurrent()
        if (user) {
            await stableGetOrg(user._id)
        } else {
            return {}
        }
    }

    async function orgSettings(body) {
        if (objectValidator(org.state.current)) {
            await org.createOrg(body)
            getCurrentOrg()
        } else {
            await org.updateOrg(org.state.current._id, body)
            getCurrentOrg()
        }
    }

    async function fileOrg(file) {
        const fm = new FormData()
        fm.append('file', file)
        const res = await org.updateOrgLogo(org.state.current._id, fm)
        if (!res) {
            return 'server error'
        }
        await getCurrentOrg()
        return null
    }

    function logOut() {
        auth.logOut()
        auth.clearState()
        org.clearState()
        window.location.reload()
    }

    function openModal() {
        setShopModal(true)
    }

    function closeModal() {
        setShopModal(false)
    }

    const value = {
        getCurrentOrg,
        logOut,
        ShopModal,
        openModal,
        closeModal,
        orgSettings,
        fileOrg
    }

    return <AppContext.Provider value={value} {...props} />
}

export function useApp() {
    const context = React.useContext(AppContext)
    if (!context) {
        return new Error('useApp is out Provider')
    }
    return context
}