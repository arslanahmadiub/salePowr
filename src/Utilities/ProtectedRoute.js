import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'


export default function ProtectedRoute({ component: Component, ...rest }) {

    const { user } = React.useContext(AuthContext);

    console.log(user)

    return user != null ? <Route
        {...rest}
        render={(props) => {

            return <Component {...props} />
        }}
    />

        : <Redirect to="/user-authentication" />

}