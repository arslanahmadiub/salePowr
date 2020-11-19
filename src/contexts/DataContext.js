import React from 'react'
import { countryList, bankList, mobileOperators } from './DataSets'

export const DataContext = React.createContext();


export default function DataContextProvider(props) {


    return (
        <DataContext.Provider value={{ countryList, bankList, mobileOperators }}>
            {props.children}
        </DataContext.Provider>
    )
}