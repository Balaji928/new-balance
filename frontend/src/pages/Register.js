import React, { useState } from 'react'
import { register } from '../pages/Auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {

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
          navigate("/login");
        }catch(err){
          console.log("Registration Error",err);
          seterror("Registration Failed");
          setsucess('');
        }
    }
  return (
    <div className='whole'>
    <div className="form-container">
    <form onSubmit={handleSubmit} className='form-card'>
      <div class="input-group1">
      <label>UserName</label>
      <input type='text' name='name' value={username} onChange={(e)=>setusername(e.target.value)}/>
      </div>

      <div class="input-group1">
      <label>Password</label>
      <input type='password' name='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
      </div>

      <button type='submit' class="submit-btn1">Register</button>
      {success && <p style={{color:"Green"}}>{success}</p>}
      {error && <p style={{color:'red'}}>{error}</p>}
    </form>
    </div>
    </div>
  )
}

export default Register