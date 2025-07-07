import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
import  { useEffect, useRef } from 'react';
import { useState } from 'react'
import { register } from '../pages/Auth';
import { useNavigate } from 'react-router-dom';
import { login } from '../pages/Auth';

const Signup = () => {
   const [username,setusername]=useState('');
  const [password,setpassword]=useState('');
  const [error,seterror]=useState('');
  const [success,setsucess]=useState('')
  const navigate=useNavigate();

  const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
          await register(username,password);
          setsucess('Registered Succsseful');
          seterror('');
          navigate("/signup");
        }catch(err){
          console.log("Registration Error",err);
          seterror("Registration Failed");
          setsucess('');
        }
    }

    const [username1,setusername1]=useState('');
  const [password1,setpassword1]=useState('');
  const [error1,seterror1]=useState('');
  const [success1,setsucess1]=useState('')

  const handleSubmi1t=async(e)=>{
    e.preventDefault();
    try{
      const token = await login(username, password);
      console.log('Login successful, token:', token);
      alert('Login successful');
      setusername('')
      setpassword('')
      setsucess('Successfully Logged In')
      seterror('')
    }catch(err){
      console.log('Login Error',err)
      seterror('Logged In Failed')
      setsucess('')
    }
   }

  const wrapperRef = useRef(null);
  const signupHeaderRef = useRef(null);
  const loginHeaderRef = useRef(null);

  useEffect(() => {
  const wrapper = document.querySelector(".wrapper"),
          signupHeader = document.querySelector(".signup header"),
          loginHeader = document.querySelector(".login header");
        loginHeader.addEventListener("click", () => {
          wrapper.classList.add("active");
        });
        signupHeader.addEventListener("click", () => {
          wrapper.classList.remove("active");
        });
      })
  return (
    <div class="t1">
       <section class="wrapper">
      <div class="form signup">
        <header>Signup</header>
        <form action="#" class="t2">
          {/* <input type="text" placeholder="Full name" required /> */}
          <input type='text' name='name' value={username} placeholder="Full name" onChange={(e)=>setusername(e.target.value)}/>
          {/* <input type="text" placeholder="Email address" required /> */}
          {/* <input type="password" placeholder="Password" required /> */}
          <input type='password' name='password' value={password}  placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
          <div class="checkbox">
            <input type="checkbox" id="signupCheck" />
            <label for="signupCheck">I accept all terms & conditions</label>
          </div>
          <input type="submit" value="Signup" class="sub"/>
        </form>
      </div>
      <div class="form login">
        <header>Login</header>
        <form action="#">
          {/* <input type="text" placeholder="Email address" required /> */}
          <input type='text'  name='name'  value={username}  onChange={(e)=>setusername(e.target.value)}/>
          {/* <input type="password" placeholder="Password" required /> */}
          <input  type='password'  name='password'  value={password}  onChange={(e)=>setpassword(e.target.value)}/>
          <a href="#">Forgot password?</a>
          <input type="submit" value="Login" />
        </form>
      </div>

    </section>
    </div>
  )
}

export default Signup