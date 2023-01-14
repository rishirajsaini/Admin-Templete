import React from 'react'
import { Link } from 'react-router-dom'
import "./TopNavbar.css"
import { menuItem } from './utill'

const Topnavbar = () => {
    const getLinks = menuItem.map((items,index)=>{
        return(
          <li className="nav-item" key={index} >
                    <Link className="nav-link " aria-current="page" to={items.link}>
                     <div className='itemsColor2'> {items.page}</div>
                    </Link>
                  </li>
        )
      })
  return (
   <>
    <nav class="navbar navbar-expand-lg navbar-dark nav-color2 sticky-top ">
  <div class="container-fluid">
   
      {/* <h1 className='logo-text2'>RR Infosoft</h1> */}
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      {getLinks}
      </ul>
     
    </div>
  </div>
</nav>
   
   </>
  )
}

export default Topnavbar