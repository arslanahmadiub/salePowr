import React from 'react'
import themeConfig from './themeConfig';


export const ThemeContext = React.createContext();


export default function ThemeContextProvider(props) {

    return <ThemeContext.Provider value={themeConfig()}>
        {props.children}
    </ThemeContext.Provider>
}