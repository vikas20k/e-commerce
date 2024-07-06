import React from 'react'
import "./Home.css"
import hand_icon from "../../assets/hand_icon.png"
import arrow_icon from "../../assets/arrow.png"
import hero_image from "../../assets/hero_image.png"
function Home() {
    return (
        <div className='home'>
            <div className='homeLeft'>
                <h2>NEEW ARRIVALS ONLY</h2>
                <div>
                    <div className='hand-icon'>
                        <p>new</p>
                        <img src={hand_icon} alt='' />
                    </div>
                    <p>collection</p>
                    <p>foreveryone</p>
                </div>
                <div className='home-latest-btn'>
                    <div>Latest Collection</div>
                    <img src={arrow_icon} />
                </div>
            </div>


            <div className='homeRight'>
                <img src={hero_image} />
            </div>

        </div>
    )
}

export default Home