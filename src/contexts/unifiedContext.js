import React from 'react'
import AuthContextProvider from './AuthContext'
import ThemeContextProvider from './ThemeContext'
import ShopContextProvider from './ShopContext'
import RightSideBarContextProvider from './RightSideBarContext'
import DataContextProvider from './DataContext'
import TransactionsContextProvider from './TransactionsContext'


export default function UnifiedContextProviderProvider(props) {


    return (
        <AuthContextProvider>
            <RightSideBarContextProvider>
                <ThemeContextProvider>
                    <ShopContextProvider>
                        <TransactionsContextProvider>
                            <DataContextProvider>
                                {props.children}
                            </DataContextProvider>
                        </TransactionsContextProvider>
                    </ShopContextProvider>
                </ThemeContextProvider>
            </RightSideBarContextProvider>
        </AuthContextProvider>
    )

}