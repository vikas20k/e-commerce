import React from 'react'
import data from "../../assets/data"
import Items from '../Items/Items'
function Popular() {
    return (
        <div className=''>
            <div className='flex justify-center'>
                <h1 className='text-center text-3xl text-black font-bold border-b-4 border-black'>POPULAR IN WOMEN</h1>
            </div>
            {/* <hr /> */}
            <div className='mt-10 flex justify-center flex-wrap  '>
                {data.map((item, index) => {
                    return <Items key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}

            </div>
        </div>
    )
}

export default Popular