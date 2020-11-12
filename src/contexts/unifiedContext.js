import React from 'react'
import AuthContextProvider from './AuthContext'
import ThemeContextProvider from './ThemeContext'
import ShopContextProvider from './ShopContext'


export default function UnifiedContextProviderProvider(props) {


    return (
        <AuthContextProvider>
            <ThemeContextProvider>
                <ShopContextProvider>
                    {props.children}
                </ShopContextProvider>
            </ThemeContextProvider>
        </AuthContextProvider>
    )

}