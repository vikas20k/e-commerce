import React, { createContext } from 'react'
import allProduct from "../assets/all_product"

export const ShopContext = createContext(null);


function ShopContextProvider(props) {
    const contextValue = { allProduct }
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider