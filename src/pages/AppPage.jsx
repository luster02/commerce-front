import React, { useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { Navigation } from '../routes/main'
import { SideBar } from '../components/SideBar'
import { ModalPage } from '../pages/ModalPage'
import { useApp } from '../context/context/appContext'

export const AppPage = () => {
    const location = useLocation()

    return (
        <>
            {location.pathname !== '/login' && <SideBarComponent />}
            <div className={location.pathname !== '/login' ? "relative md:ml-64 " : ""}>
                <ModalPage />
                <NavigationComponent />
            </div>
        </>
    )
}


function SideBarComponent() {
    const app = useApp()
    const stablegetCurrentOrg = useCallback(app.getCurrentOrg, [])

    useEffect(() => {
        stablegetCurrentOrg()
    }, [stablegetCurrentOrg])

    return <SideBar />
}

function NavigationComponent() {
    const app = useApp()
    const stablegetCurrentOrg = useCallback(app.getCurrentOrg, [])

    useEffect(() => {
        stablegetCurrentOrg()
    }, [stablegetCurrentOrg])

    return <Navigation />
}