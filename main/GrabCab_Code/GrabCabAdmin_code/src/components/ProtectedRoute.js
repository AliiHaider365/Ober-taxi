import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import { useSelector } from "react-redux";
import ResponsiveDrawer from './ResponsiveDrawer';

function ProtectedRoute({ component: Component, ...rest }) {
    const auth = useSelector(state => state.auth);
    // const auth="jbbcjj";
    return(
        <Route {...rest} render={props => (
            auth.info ?
            // auth ?
            <ResponsiveDrawer><Component {...props} /></ResponsiveDrawer>
            : <Redirect to="/login" />
        )} />
    )
}

export default ProtectedRoute;