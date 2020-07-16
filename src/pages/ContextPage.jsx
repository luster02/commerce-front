import React from 'react'
import { AuthProvider } from '../context/context/loginContext'
import { OrgProvider } from '../context/context/orgContext'
import { HistoryProvider } from '../context/context/histoyContext'
import { ProductProvider } from '../context/context/productContext'
import { AppProvider } from '../context/context/appContext'

export const ContextProviderPage = (props) => {
    return (
        <AuthProvider>
            <OrgProvider>
                <HistoryProvider>
                    <ProductProvider>
                        <AppProvider>
                            {props.children}
                        </AppProvider>
                    </ProductProvider>
                </HistoryProvider>
            </OrgProvider>
        </AuthProvider>
    )
}
