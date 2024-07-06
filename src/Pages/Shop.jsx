import React, { useEffect, useState } from 'react'
import Home from '../components/Home/Home'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import NewCallection from '../components/NewCallection/NewCallection'
import NewProduct from '../components/NewProduct/NewProduct'
import Skeletton from "../components/Skeletton/Skeletton"


function Shop() {

    const [products, setProducts] = useState([])
    const fetchProducts = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json()
            // console.log(data)
            setProducts(data)
        } catch (error) {
            console.log("error 404")

        }
    }

    useEffect(() => {
        fetchProducts()

    }
        , [])
    return (
        <div>
            <Home />


            {
                products.length > 0 ? <NewProduct products={products} /> : <Skeletton />
            }
            <Offers />
            <Popular />

            {/* <NewCallection /> */}
            {/* <NewProduct /> */}
        </div>
    )
}

export default Shop