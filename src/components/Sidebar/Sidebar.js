import React from 'react'
import './Sidebar.css'
import { Link } from "react-router-dom";
import { useContext, useState } from "react"; 
import { BiAbacus } from "react-icons/bi";
// import {BiAbacus} from 'react-icon/bi'
// import {BiAbacus} from 'react-icon/bi'
// import {BiAbacus} from 'react-icon/bi'
// import {BiAbacus} from 'react-icon/bi'
// import {BiAbacus} from 'react-icon/bi'
// import {BiAbacus} from 'react-icon/bi'
// import {BiAbacus} from 'react-icon/bi'
// import {BiAbacus} from 'react-icon/bi'
// import {BiAbacus} from 'react-icon/bi'
// import {BiAbacus} from 'react-icon/bi'
// import {BiAbacus} from 'react-icon/bi'
// import {BiAbacus} from 'react-icon/bi'
// import {BiAbacus} from 'react-icon/bi'



 const Sidebar = ({children}) => {
  const[isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  return (
    <div className="container-fluid">
<div className="sidebar" style={{width: isOpen ? "300px" : "50px"}}>
      <div className="top" style={{display:"flex"}}>
        {/* <Link to="/" style={{ textDecoration: "none" }}> */}
          <span className="logo" style={{display: isOpen ? "block" : "none"}}>admin</span>
          <BiAbacus className="bras" onClick={toggle} 
         style={{marginLeft: isOpen ? "70px" : "0px",
         }}/>
        {/* </Link> */}
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/dashboard"  style={{textDecoration:'none'}}>
          <li>
            <BiAbacus className="icon" />
          
            <span style={{display: isOpen ? "block" : "none"}}>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <BiAbacus className="icon" />
              
              <span style={{display: isOpen ? "block" : "none"}}>Users</span>
            </li>
          </Link>
          <Link to="/product" style={{ textDecoration: "none" }}>
            <li>
              <BiAbacus className="icon" />
            
              <span style={{display: isOpen ? "block" : "none"}}>Product</span>
            </li>
          </Link>
          {/* <li>
          <BiAbacus className="icon" />
            <span style={{display: isOpen ? "block" : "none"}}>Orders</span>
          </li> */}
          <Link to="/pages" style={{ textDecoration: "none" }}>
          <li>
            <BiAbacus className="icon" />
         
            <span style={{display: isOpen ? "block" : "none"}}>Pages</span>
          </li>
          </Link>
          <p className="title">USEFUL</p>
          <li>
            <BiAbacus className="icon" />
            
            <span style={{display: isOpen ? "block" : "none"}}>Stats</span>
          </li>
          <li>
            <BiAbacus className="icon" />
           
            <span style={{display: isOpen ? "block" : "none"}}>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <BiAbacus className="icon" />
           
            <span style={{display: isOpen ? "block" : "none"}}>System Health</span>
          </li>
          <li>
            <BiAbacus className="icon" />
          
            <span style={{display: isOpen ? "block" : "none"}}>Logs</span>
          </li>
          <li>
            <BiAbacus className="icon" />
             
            <span style={{display: isOpen ? "block" : "none"}}>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <BiAbacus className="icon" />
             
            <span style={{display: isOpen ? "block" : "none"}}>Profile</span>
          </li>
          <li>
            <BiAbacus className="icon" />
       
            <span style={{display: isOpen ? "block" : "none"}}>Logout</span>
          </li>
        </ul>
      </div>
    </div>
    <main>{children}</main>
    </div>
  );
        };


export default Sidebar;