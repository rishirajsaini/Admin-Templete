import React from 'react'
import './Home.css'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
    <span className='logo'>
        Lama Chat
    </span>
    <div className='user'>
           
            <img className='img-box' src='fafa.jpg'/>
           

        <span className='span-text'>John</span>
        <button className='logout-btn'>Logout</button>
    </div>
    </div>
    </>
  )
}

export default Navbar