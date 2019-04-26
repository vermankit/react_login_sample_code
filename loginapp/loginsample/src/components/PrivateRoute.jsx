import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    // eslint-disable-next-line no-unused-expressions
    return <Route  {...rest} render={props => (
       localStorage.getItem('user') ? <Component {...props} /> : <Redirect to={{ pathname:'/login',state:{from : props.location}}}/>


    )} />

};