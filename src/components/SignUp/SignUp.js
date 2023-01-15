import React from 'react'
import './SignUp.css'

const SignUp = () => {
  return (
   <>
   <div className='formContainer'>
    <div className='formWrapper'>
    
      <form  className='forms'>
       <span  className='logo'>RR INFOSOFT</span>
      <span className='title'>Register</span>
        <input className='input-feilds' type="text" placeholder='display Name' />
        <input className='input-feilds' type="email" placeholder='email' />
        <input className='input-feilds' type="password" placeholder='password' />
        <input style={{display:"none"}} type="file" id="file" />
        <label htmlFor='file'>
          <div className='ImgBox'>
            <img className='size' src='user.png' />
          </div>
          </label>
        <button className='signbtn'>SignUp</button>
        <p className='clasic'>you do have an account? 
        <span>Login</span></p>

      </form>
     
    </div>
   </div>
   
   </>
  )
}

export default SignUp