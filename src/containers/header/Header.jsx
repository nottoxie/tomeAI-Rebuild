import React from 'react'
import './header.css'
import video1 from '../../assets/header.mp4'

const Header = () => {
  return (
    <div className='tome__header section__padding'>
      <div className='tome__header-text slide-top'>
        <h2>
          Generative storytelling
          <br></br>
          <h4>has arrived.</h4>
        </h2>
        </div>
        <div className='tome__header-textbtn  slide-top'>
          <div className='tome__header-ptag  slide-top'>
            <p>Unlock your best work with Tome's AI-powered
              <br></br> storytelling format.</p>
          </div>
          <div className='tome__header-sign  slide-top'>
          <button type='button' onclick="location.href='https://www.youtube.com/c/NotToxie'">Get Tome for Free</button>
          </div>
          <div className='tome__header-video  slide-top'>
              <video src={video1} autoPlay="true" muted loop width={800}/>
          </div>
        </div>
    </div>
  )
}

export default Header