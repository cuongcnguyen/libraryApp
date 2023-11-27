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
        .get("http://localhost:8000/users", {
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
                //alert("Only admins have access to this site");
                localStorage.setItem("userInfor", resp[0]);
                navigate("/");
                
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

  
  const [feature, setFeature] = useState('Sign Up');


  return (
    <div className="bg-baseColor">
      <div className="container-signup">
        <form onSubmit={submitHandler}>
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
              <input type="email" placeholder='Email' onChange={handleChange("email")}/>
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input type="password" placeholder='Password' onChange={handleChange("password")}/>
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
            <button type='submit' className={feature==='Log In'?'submit':'submit gray'} onClick={()=>{ setFeature('Log In') } }>
              Log In
            </button>
            
          </div>
        </form>
            
      </div>
    </div>
    
  )
}

export default LoginSignup