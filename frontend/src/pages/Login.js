import React, { useState } from 'react';
import { login } from '../pages/Auth';

const Login = () => {
  const [username,setusername]=useState('');
  const [password,setpassword]=useState('');
  const [error,seterror]=useState('');
  const [success,setsucess]=useState('')

  const handleSubmit=async(e)=>{
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
  return (
    <div className='whole'>
    <div className="form-container">
    <form onSubmit={handleSubmit} className='form-card'>
      <h2 className="form-title">Login</h2>
      <div class="input-group1">
      <label>UserName</label>
      <input type='text'  name='name'  value={username}  onChange={(e)=>setusername(e.target.value)}/>
      </div>
      <br></br><br></br>
    <div class="input-group1">
    <label>Password</label>
    <input  type='password'  name='password'  value={password}  onChange={(e)=>setpassword(e.target.value)}/>
    </div>
    <br></br><br></br>

    <button type='submit' class="submit-btn1">Login</button>
    {success && <p style={{color:"Green"}}>{success}</p>}
    {error && <p style={{color:'red'}}>{error}</p>}
    </form>
    </div>
    </div>
  )
}

export default Login