import React, { useState} from 'react'
import './LoginSignup.scss'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const user_icon = require('../images/login-Signup-React-Assets/Assets/person.png');
const email_icon = require('../images/login-Signup-React-Assets/Assets/email.png'); 
const password_icon = require('../images/login-Signup-React-Assets/Assets/password.png');

interface User{
  email: string,
  password: string
}

const LoginSignup = () => {
  
  const [values, setValues] = useState<User>({email :"", password:""});
  const navigate = useNavigate();

  const handleChange =
    (prop: keyof User) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  
  const submitHandler = async (e: any) => {
    localStorage.setItem("userInfor", JSON.stringify(values));
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      axios
        .get("https://libserver.onrender.com/users", {
          params: {
            email: values.email,
          },
        })
        
        .then((res) => {          
          console.log(res);
          const resp = res.data;
          
          if (Object.keys(resp).length === 0) {
            alert("The user with the input email does not exist");
          } else {
            if (resp[0].password === values.password) {
              if (resp[0].role === "1") {
                localStorage.setItem("userInfor", resp[0]);
                navigate("/admin");
              } else {
                // user dashboard
                alert("Only admins have access to this site");                                
              }
            } else {
              alert("Wrong password");
            }
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  };

  
  const [feature, setFeature] = useState('Log In');


  return (
    <div className="bg-baseColor">
      <div className="container-signup">
        <form onSubmit={submitHandler}>
          <div className="header">
            <div className="text">{feature}</div>
            <div className="underline"></div>
          </div>
          <div className="inputs-field">            
            
            <div className="input">
              <img src={email_icon} alt="" />
              <input type="email" placeholder='Email' onChange={handleChange("email")}/>
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input type="password" placeholder='Password' onChange={handleChange("password")}/>
            </div>
          </div>
          
          <div className="forgot-pass">Forgot password? <span><a href="">Click here</a></span></div>
          
          
          <div className="submit-container">
            
            <button type='button' className='submit gray' onClick={
              ()=>{                
                navigate('signup');
              }
            }>
              Sign Up
            </button>
            <button type='submit' className='submit' >
              Log In
            </button>
            
          </div>
        </form>
            
      </div>
    </div>
    
  )
}

export default LoginSignup