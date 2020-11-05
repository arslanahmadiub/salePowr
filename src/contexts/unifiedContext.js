import React from 'react'
import { AuthContext } from './AuthContext'
import { ThemeContext } from './ThemeContext'

export const UnifiedContext = React.createContext()

export default function UnifiedContextProvider(props) {
    const theme_context = React.useContext(ThemeContext)
    const auth_context = React.useContext(AuthContext)
    const context = {

    }

    return <UnifiedContext.Provider value={{ theme: theme_context, user: auth_context }}>
        {props.children}
    </UnifiedContext.Provider>

}