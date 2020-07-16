import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/context/loginContext'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const auth = useAuth()
    return (
        <Route {...rest} render={props => (
            auth.state.isAuth === true 
                ? <Component {...props} />
                : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;