import React from 'react'
import AuthContextProvider from './AuthContext'
import ThemeContextProvider from './ThemeContext'
import ShopContextProvider from './ShopContext'
import RightSideBarContextProvider from './RightSideBarContext'
import DataContextProvider from './DataContext'


export default function UnifiedContextProviderProvider(props) {


    return (
        <AuthContextProvider>
            <RightSideBarContextProvider>
                <ThemeContextProvider>
                    <ShopContextProvider>
                        <DataContextProvider>
                            {props.children}
                        </DataContextProvider>
                    </ShopContextProvider>
                </ThemeContextProvider>
            </RightSideBarContextProvider>
        </AuthContextProvider>
    )

}