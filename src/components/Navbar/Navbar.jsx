import React, { useState, useRef } from 'react'
import './Navbar.css'
import logo from "../../assets/logo.png"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

function Navbar() {
    const cartsItem = JSON.parse(localStorage.getItem('cart')) || [];
    const [menu, setMenu] = useState('Shop')

    const menuRef = useRef()

    const openMenu = () => {
        menuRef.current.style.right = '0px'
    }

    const openClose = () => {
        menuRef.current.style.right = '-350px'
    }

    return (
        <div className='navbar'>
            <div className='navLogo'>
                <img src={logo} alt='' />
                <p>VikasMart</p>


            </div>
            <ul className='nav-menu' ref={menuRef}>
                <span className='navMobClose ' onClick={openClose}><RxCross1 /></span>
                <li onClick={() => setMenu('Shop')}><Link to='/' style={{ textDecoration: "none" }}>Shop</Link>{menu === "Shop" ? <hr /> : <></>}</li>
                <li onClick={() => setMenu('Men')}><Link to='/mens' style={{ textDecoration: "none" }}>Men</Link>{menu === "Men" ? <hr /> : <></>}</li>
                <li onClick={() => setMenu('Women')}><Link to="/womens" style={{ textDecoration: "none" }}>Women</Link>{menu === "Women" ? <hr /> : <></>}</li>
                <li onClick={() => setMenu('Kid')}><Link to='/kids' style={{ textDecoration: "none" }}>Kids</Link>{menu === "Kid" ? <hr /> : <></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login' style={{ textDecoration: "none" }}><button className='loginBtn'>Login</button></Link>
                <span className='shopingCart'><Link to='/Cart' style={{ textDecoration: "none" }}><AiOutlineShoppingCart /></Link></span>
                <div className='nav-cart-count'>{cartsItem?.length}</div>
                <div className='navbarmoblie' onClick={openMenu}><GiHamburgerMenu /></div>
            </div>

        </div>
    )
}

export default Navbar