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
    <p  className='logoRR'>RR Infosoft</p>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
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