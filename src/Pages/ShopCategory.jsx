import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdownIcon from "../assets/dropdown_icon.png"
import Items from "../components/Items/Items"



function ShopCategory(props) {
    const { allProduct } = useContext(ShopContext)
    return (
        <div className=''>
            <img className='block w-4/5 my-5 mx-12' src={props.banner} />

            <div className='flex justify-start flex-wrap mx-5 '>
                {allProduct.map((item, index) => {
                    if (props.category === item.category) {
                        return <Items key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

                    }
                    else {
                        return
                    }
                })}
            </div>
            <div className='flex justify-center p-5 w-full'>
                <span className='  bg-slate-400 text-black py-4 px-8 rounded-full font-bold text-2xl hover:bg-gray-300 hover:text-white'>Explore More</span>


            </div>

        </div>
    )
}

export default ShopCategory