import React from 'react'
import { countryNames } from './DataSets'

export const DataContext = React.createContext();


export default function DataContextProvider(props) {


    return (
        <DataContext.Provider value={{ countryNames }}>
            {props.children}
        </DataContext.Provider>
    )
}