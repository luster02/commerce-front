import React from 'react'
import { ShopModal } from '../components/ShopModal'
import { useApp } from '../context/context/appContext'

export const ModalPage = () => {
    const app = useApp()

    return (
        <>
            {app.ShopModal && <ShopModal />}
        </>
    )
}
