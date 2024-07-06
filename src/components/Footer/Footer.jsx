import React from 'react'
// import "./Footer.css"
import footer_logo from "../../assets/logo_big.png"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";

function Footer() {
    return (

        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">

                <div className='footer-logo flex items-center gap-2'>
                    <img src={footer_logo} alt='' />
                    <p className='font-bold text-[#383838] text-4xl'>VikasMart</p>
                </div>

                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 VikasMart

                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-4 text-3xl">
                    <a href='https://www.instagram.com/vikas__k07?igsh=YzljYTk1ODg3Zg==' target='_blank'><FaInstagram /></a>
                    <a href='https://www.linkedin.com/in/vikas-kumar-2908792bb/' target='_blank'><FaLinkedin /></a>
                    <a href='https://x.com/07Viikaas' target='_blank'><FaXTwitter /></a>
                    <a href='https://github.com/vikas20k' target='_blank'><FaGithub /></a>
                    <a href='https://portfolio-website-xi-henna.vercel.app' target='_blank'><IoPersonCircle /></a>

                </span>
            </div>
        </footer>






    )
}

export default Footer