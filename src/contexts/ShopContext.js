import React from 'react'
import { shopsData } from '../DummyData/DummyData';


const ShopContext = React.createContext();


export default function ShopContextProvider(props) {
    const [shop, setShop] = React.useState(null);
    const [selected, changeShop] = React.useState(null);

    React.useEffect(() => {
        // when the selected shop changes
        // you can make api call to get the
        // details of the newly selected shop
        // Or may from localStorage
        // then setit like this...
        setShop(shopsData);

    }, [selected])
    return <ShopContext.Provider value={{ shop, changeShop }}>
        {props.children}
    </ShopContext.Provider>
}