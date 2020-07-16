import React, { Suspense, lazy } from 'react'
import { Switch, Redirect } from 'react-router-dom'
import PublicRoute from './PublicRouteComponent'
import PrivateRoute from './PrivateRouteComponent'
import { Loader2 } from '../components/LoaderComponent'

//pages
const HomePage = lazy(() => import('../pages/HomePage'))
const LoginPage = lazy(() => import('../pages/LoginPage'))
const ProductsPage = lazy(() => import('../pages/ProductsPage'))

export const Navigation = () => (
    <Suspense fallback={<Loader2 />}>
        <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <PrivateRoute exact path="/products" component={ProductsPage} />
            <PublicRoute path="/login" component={LoginPage} />
            <Redirect to="/" />
        </Switch>
    </Suspense>
) 
