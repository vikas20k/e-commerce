import React from 'react'

function Items(props) {

    return (

        <div className=" p-2 md:w-1/5 w-2/5 m-auto py-5">
            <div className=" relative rounded overflow-hidden ">
                <img alt="ecommerce" className="object-contain w-64 h-full " src={props.image} />
            </div>
            <div className="mt-4 ">
                <h3 className="text-black text-xl font-bold tracking-widest title-font mb-1 ">{props.name}</h3>
                {/* <h2 className="text-gray-900 title-font text-lg font-medium">{props.title}</h2> */}
                <p className="mt-1 text-black font-bold text-2xl">₹{props.new_price}</p>
                <p className="mt-1 line-through text-gray-500 font-semibold text-xl">₹{props.old_price}</p>

            </div>

        </div>




    )
}

export default Items