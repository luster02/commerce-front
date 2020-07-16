import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/context/loginContext'

const PublicRoute = ({ component: Component, ...rest }) => {
    const auth = useAuth()
    return (
        <Route {...rest} render={props => (
            auth.state.isAuth === true
                ? <Redirect to="/" />
                : <Component {...props} />
        )} />
    );
};

export default PublicRoute;