import React from 'react'
import './Offers.css'
import exclusive from "../../assets/exclusive_image.png"

function Offers() {
    return (
        <div className='offers'>
            <div className='offers-left'>
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div className='Offers-right'>
                <img src={exclusive} alt='' />
            </div>
        </div>
    )
}

export default Offers