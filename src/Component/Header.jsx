import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import "./navbarStyle.css"
import "./headerStyle.css"

const Header = () => {
  return (
    
      <div className="header">
      <div className="logo">
        <img src="path/to/your/logo.png" alt="Company Logo" />
      </div>
      <div className="search">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <div className="notification">
        <FontAwesomeIcon icon={faBell} />
      </div>
    </div>
    
  )
}

export default Header
