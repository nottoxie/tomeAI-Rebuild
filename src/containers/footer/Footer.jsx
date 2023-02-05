import React from 'react'
import './footer.css'
import logo from '../../assets/logoTome.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'

const Footer = () => {
  return (
    <div className='tome__footer' section__padding>
        <div className='tome__footer-logo'>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
            <img src={logo} alt="Tome LOGO"/>
        </div>
        <div className='tome__footer-list'>
            <ul>
              <p>Terms of Services</p>
              <p>Privacy Notice</p>
              <p>Site Map</p>
              <p>Press</p>
              <p>Contact Us</p>
            </ul>
        </div>
        <div className='tome__footer-icon'>
            <img src={twitter} alt='twitter' className='twitter'/>
            <img src={linkedin} alt='linkedin' className='linkedin'/>
        </div>
        <div className='tome__footer-copyright' >
          <p>© 2022 Magical Tome, Inc</p>
        </div>
    </div>
  )
}

export default Footer