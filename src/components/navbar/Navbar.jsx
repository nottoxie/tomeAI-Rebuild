import React, {useState, useEffect} from 'react'
import './navbar.css'
import logo from '../../assets/logoTome.png'
import menuicon from '../../assets/menuicon.png'

const Navbar = () => {

  return (
    <div className='tome__navbar-blackbar'>
    <div className='tome__navbar'>
      <nav>
      <div className='tome__navbar-links'>
        <div className='tome__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
          <div className='tome__navbar-sign'>
              <button type='button' onclick="location.href='https://www.youtube.com/c/NotToxie'">Try Tome</button>
          </div>
          <div className='tome__menuicon'>
              <img src={menuicon} alt="menuicon" />
          </div>
      </div>
      </nav>
    </div>
    </div>
  )
}

export default Navbar