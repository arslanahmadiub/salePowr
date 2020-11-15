import React from 'react'
import AuthContextProvider from './AuthContext'
import ThemeContextProvider from './ThemeContext'
import ShopContextProvider from './ShopContext'
import RightSideBarContextProvider from './RightSideBarContext'


export default function UnifiedContextProviderProvider(props) {


    return (
        <AuthContextProvider>
            <RightSideBarContextProvider>
                <ThemeContextProvider>
                    <ShopContextProvider>
                        {props.children}
                    </ShopContextProvider>
                </ThemeContextProvider>
            </RightSideBarContextProvider>
        </AuthContextProvider>
    )

}