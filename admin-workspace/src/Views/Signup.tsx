import React, { useState} from 'react'
import './LoginSignup.scss'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const user_icon = require('../images/login-Signup-React-Assets/Assets/person.png');
const email_icon = require('../images/login-Signup-React-Assets/Assets/email.png'); 
const password_icon = require('../images/login-Signup-React-Assets/Assets/password.png');

interface UserSignup{
    username: string,
    email: string,
  password: string
}


const Signup: React.FC = () => {
  
  const [values, setValues] = useState<UserSignup>({username:"", email :"", password:""});
  const navigate = useNavigate();

  const handleChange =
    (prop: keyof UserSignup) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
    
  
  const submitHandler = async (e: React.FormEvent) => {    
    e.preventDefault();

    if (
        !values.username ||
        !values.email ||
        !values.password       
    ) {
        alert("Please fill all information");
        return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      axios
        .post("http://localhost:8000/users", {
          username: values.username,
          email: values.email,
          password: values.password,
          role: 2
        },
        config
        );
        alert('Signup Successful');        
  
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-baseColor">
      <div className="container-signup">
        <form onSubmit={submitHandler}>
          <div className="header">
            {/* <div className="text">{feature}</div> */}
            <div className="text">Sign Up</div>
            <div className="underline"></div>
          </div>
          <div className="inputs-field">

            

            
            <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Name' onChange={handleChange("username")}/>
            </div>
            
            
            
            <div className="input">
              <img src={email_icon} alt="" />
              <input type="email" placeholder='Email' onChange={handleChange("email")}/>
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input type='password' placeholder='Password' onChange={handleChange("password")}/>
            </div>
          </div>          
          
          <div className="submit-container">
            
            <button type='submit' className='submit'>
              Sign Up
            </button>
            <button type='button' className='submit gray' onClick={()=>{
                navigate('/');
            }} >
              Log In
            </button>
            
          </div>
        </form>
            
      </div>
    </div>
    
  )
}

export default Signup