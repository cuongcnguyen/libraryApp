import React, { useState} from 'react'
import './LoginSignup.scss'

const user_icon = require('../images/login-Signup-React-Assets/Assets/person.png');
const email_icon = require('../images/login-Signup-React-Assets/Assets/email.png'); 
const password_icon = require('../images/login-Signup-React-Assets/Assets/password.png');

const LoginSignup = () => {

  const [feature, setFeature] = useState('Sign Up');

  return (
    <div className="container">
      <div className="header">
        <div className="text">{feature}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs-field">

        {/* Show Input Name if the feature is Sign Up, none if the feature is Log In */}

        {feature==='Sign Up'
          ?<div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder='Name' />
          </div>
          :<div className=""></div>
        }
        
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="text" placeholder='Email' />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="text" placeholder='Password' />
        </div>
      </div>
      {/* Show Forgot Password if the feature is Log In */}
      {feature === 'Sign Up'
        ? <div></div>
        :<div className="forgot-pass">Forgot password? <span><a href="">Click here</a></span></div>
      }
      
      <div className="submit-container">
        
        <button className={feature==='Sign Up'?'submit':'submit gray'} onClick={()=>{setFeature('Sign Up')}}>
          Sign Up
        </button>
        <button className={feature==='Log In'?'submit':'submit gray'} onClick={()=>setFeature('Log In')}>
          Log In
        </button>
        
      </div>
    
    </div>
  )
}

export default LoginSignup