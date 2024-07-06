import React from 'react'
import "./Css/LoginSignup.css"

function LoginSignup() {
    return (
        <div className='loginsignup'>
            <div className='loginsingnup-container'>
                <h1>Sign Up</h1>
                <div className='loginsignup-fields'>
                    <input type='text' placeholder='Your Name' />
                    <input type='email' placeholder='Email Address' />
                    <input type='password' placeholder='Password' />
                </div>
                <button>Continue</button>
                <p className='loginsinsignup-login'>Already have an account ? <span>Login here</span></p>
                <div className='loginsignup-agree'>
                    <input type='checkbox' name='agree' id='agree' />
                    <p>By continuing i agree to the terms of use &privacy policy</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup