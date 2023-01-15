import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
   <>
   <div className='formContainer'>
    <div className='formWrapper'>
    
      <form  className='forms'>
       <span  className='logo'>RR Infosoft</span>
      <span className='title'>Login</span>
        
        <input className='input-feilds' type="email" placeholder='email' />
        <input className='input-feilds' type="password" placeholder='password' />
      
        <button className='signbtn'>Sign in</button>
        <p className='clasic'>you don't have an account? 
      
      <Link to="/dashboard" ><span>Register</span></Link>
      </p>

      </form>
     
    </div>
   </div>
   
   </>
  )
}

export default Login