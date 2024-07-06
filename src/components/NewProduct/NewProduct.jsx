import React from 'react'
import { Link } from 'react-router-dom';

function NewProduct({ products = [] }) {
    return (
        <section className="text-gray-600 body-font">
            <div className='flex justify-center '>
                <h1 className='text-center text-4xl text-black font-bold border-b-4 border-black'>New Callection</h1>
            </div>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {
                        products.map((product, index) => {
                            {/* console.log(product) */ }
                            const { id, image, price, category, rating, title } = product;
                            return (
                                <Link to={`/products/${id}`} className="lg:w-1/4 md:w-1/4 w-1/2 p-1 pb-6  px-3 cursor-pointer" key={index} >
                                    <div className="block relative h-32 rounded overflow-hidden">
                                        <img alt="ecommerce" className="object-contain  w-full h-full " src={image} />
                                    </div>
                                    <div className="mt-4 text-center ">
                                        <h3 className="text-gray-500 text-2xl  tracking-widest title-font mb-1">{category}</h3>
                                        <h2 className="text-gray-900 title-font text-xl  font-medium">{title}</h2>
                                        <p className="mt-1  text-xl" >₹{Math.floor(price * 84)}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default NewProduct