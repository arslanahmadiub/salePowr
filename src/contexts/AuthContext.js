import React from 'react'
import { Redirect } from 'react-router-dom';
import authConfig from './authConfig';

export const AuthContext = React.createContext();


export default function AuthContextProvider(props) {
    const [user, setUser] = React.useState(null)

    React.useEffect(() => {
        // You can make an api call here to either
        // Either check login State or to log the user in.
        // then Change the use object accordingly
        if (user) {
            return <Redirect to={'/'} />
        } else {
            return <Redirect to={'/user-authentication'} />
        }
    }, [user])


    return <AuthContext.Provider value={{ user, setUser }}>
        {props.children}
    </AuthContext.Provider>
}