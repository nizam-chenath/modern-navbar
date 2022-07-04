import React from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import {FaTimes} from "react-icons/fa"
import {BsThreeDots} from "react-icons/bs"

const Navbar = () => {
    const [nav, setNav] =useState(false)
  return (
    <div className="container">
        <nav>
          {/* logo */}
            <div className="logo">
              logo
              <FaTimes className="cancel-icon" onClick={()=> setNav(!nav)}/>
            </div>

            {/* submenu */}
            <ul className="menu-container">
              <span className="categories">
                {nav ? "Pages" : <BsThreeDots/>}
              </span>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar