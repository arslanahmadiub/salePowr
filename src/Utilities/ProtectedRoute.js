import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'


export default function ProtectedRoute({ component: Component, ...rest }) {

    const { user } = React.useContext(AuthContext);


    return <Route
        {...rest}
        render={({ location }) => {

            if (!!user) return <Component />

            return <Redirect to={{
                pathname: '/user-authentication',
                state: { from: location },

            }} />
        }}
    />

}