import React from 'react'
import './Sidebar.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { useContext, useState } from "react"; 
import { BiAbacus } from "react-icons/bi";
import { BsGridFill } from "react-icons/bs";
import { BsFillPinAngleFill } from "react-icons/bs";
import { RiCameraOffFill } from "react-icons/ri";
import { AiFillFile } from "react-icons/ai";
import { BiBrush } from "react-icons/bi";
import { GiPlug } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";





 const Sidebar = ({children}) => {
  const[isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  return (
    <div className="container-fluid">
<div className="sidebar" style={{width: isOpen ? "300px" : "50px"}}>
      <div className="top" style={{display:"flex"}}>
        {/* <Link to="/" style={{ textDecoration: "none" }}> */}
          <span className="logo" style={{display: isOpen ? "block" : "none",textDecoration:"none"}}>Admin</span>
          <BiAbacus className="bras" onClick={toggle} 
         style={{marginLeft: isOpen ? "70px" : "0px", color:"#6439ff"
         }}/>
        {/* </Link> */}
      </div>
      <hr />
      <div className="center">
        <ul>
          {/* <p className="title">MAIN</p> */}
          <Link to="/dashboard"  style={{textDecoration:'none'}}>
          <li>
            <BsGridFill className="icon" />
          
            <span className='PageItem' style={{display: isOpen ? "block" : "none"}}>Dashboard</span>
          </li>
          </Link>
          {/* <p className="title">LISTS</p> */}
          <Link to="/Post" style={{ textDecoration: "none" }}>
            <li>
              <BsFillPinAngleFill className="icon" />
              
              <span style={{display: isOpen ? "block" : "none"}}>Post</span>
              <NavDropdown className='dropdown'>
                <div className='subdropdown'>
              <li>
              <Link className='Link-item' to="/allpost">AllPost</Link >
              </li>
              <li>
                <Link className='Link-item' to="/postaddnew"> Post Add New</Link >
                </li>
                <li>
                <Link className='Link-item' to="/categories"> Categories</Link >
                </li>
              </div>
            </NavDropdown>
            </li>
          </Link>
          <Link to="/media" style={{ textDecoration: "none" }}>
            <li>
              <RiCameraOffFill className="icon" />
            
              <span style={{display: isOpen ? "block" : "none"}}>Media</span>
            </li>
          </Link>
          <Link to="/pages" style={{ textDecoration: "none" }}>
            <li>
              <AiFillFile className="icon" />
            
              <span style={{display: isOpen ? "block" : "none"}}>Pages</span>
               <NavDropdown className='dropdown'>
                <div className='subdropdown'>
              <li>
              <Link className='Link-item' to="/allpages">AllPages</Link >
              </li>
              <li>
                <Link className='Link-item' to="/addnew">Add New</Link >
                </li>
              </div>
            </NavDropdown>
              
            </li>
          </Link>
          <Link to="/appearnace" style={{ textDecoration: "none" }}>
            <li>
              <BiBrush className="icon" />
            
              <span style={{display: isOpen ? "block" : "none"}}>Appearnace</span>
              <NavDropdown className='dropdown'>
                <div className='subdropdown'>
              <li>
              <Link className='Link-item' to="/menus">Menus</Link >
              </li>
              <li>
                <Link className='Link-item' to="/customize">Customize</Link >
                </li>
              </div>
            </NavDropdown>
            </li>
          </Link>
          <Link to="/plugins" style={{ textDecoration: "none" }}>
            <li>
              <GiPlug className="icon" />
            
              <span style={{display: isOpen ? "block" : "none"}}>Plugins</span>
            </li>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <FaUserAlt className="icon" />
            
              <span style={{display: isOpen ? "block" : "none"}}>Users</span>
              <NavDropdown className='dropdown'>
                <div className='subdropdown'>
              <li>
              <Link className='Link-item' to="/allusers">All Users</Link >
              </li>
              <li>
                <Link className='Link-item' to="/alladdnew">All Add New</Link >
                </li>
                <li>
                <Link className='Link-item' to="/profile">Profile</Link >
                </li>
              </div>
            </NavDropdown>
            </li>
          </Link>
          
          <Link to="/settings" style={{ textDecoration: "none" }}>
          <li>
            <FiSettings className="icon" />
         
            <span style={{display: isOpen ? "block" : "none"}}>Settings</span>
          </li>
          </Link>
       
        </ul>
      </div>
    </div>
    <main>{children}</main>
    </div>
  );
        };


export default Sidebar;