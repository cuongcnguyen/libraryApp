import React from 'react'
import './LoginSignup.css'

const user_icon = require('../images/login-Signup-React-Assets/Assets/person.png');
const email_icon = require('../images/login-Signup-React-Assets/Assets/email.png'); 
const password_icon = require('../images/login-Signup-React-Assets/Assets/password.png');

const LoginSignup = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs-field">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder='Name' />
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="text" placeholder='Email' />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="text" placeholder='Password' />
        </div>
      </div>
      <div className="forgot-pass">Forgot password? <span><a href="">Click here</a></span></div>
      <div className="submit-container">
        
        <button className='submit'>Sign Up</button>
        <button className='submit'>Log In</button>
        
      </div>
    
    </div>
  )
}

export default LoginSignup