import React, { useState, useEffect } from 'react'
// import './NewCallection.css'
import Items from "../Items/Items"
import newCallection from "../../assets/new_collections"

function NewCallection() {


    return (
        <div className=' '>


            <div className='flex justify-center '>
                <h1 className='text-black font-bold text-4xl border-b-4 border-black'>NEW COLLECTIONS</h1>

            </div>

            <div className='flex justify-center flex-wrap mx-10 my-10'>
                {newCallection.map((item, index) => {
                    return <Items key={index} id={item.key
                    } name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

                })}
            </div>
        </div>
    )
}

export default NewCallection