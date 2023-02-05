import React from 'react'
import './usedby.css'
import flexport from '../../assets/flexport.png'
import snap from '../../assets/snap.png'
import framer from '../../assets/framer.png'
import superhuman from '../../assets/superhuman.png'
import neeva from '../../assets/neeva.png'

const Usedby = () => {
  return (
    <div className='tome__usedby' section__padding>
      <div className='tome__usedby-heading'>
        <div className='tome__usedby-para'>
          <br></br>
          <p>Used by storytellers at:</p>
          <br></br>
          </div>
          <div className='tome__usedby-company'>
            <div className='tome__usedby-twogroupA'>
            <img src={flexport} alt="flexportlogo"/>
            <img src={snap} alt="snap logo" className="snap"/>
            </div>
            <img src={superhuman} alt="superhuman logo" className="superhuman"/>
            <div className='tome__usedby-twogroupB'>
            <img src={framer} alt="framer logo"/>
            <img src={neeva} alt="neeva logo" className="neeva"/>
            </div>
          </div>
          <div className='tome__usedby-heading2'>
            <h1>Ready to dive in?</h1>
          <button type='button'>Get Tome for Free</button>
          </div>
      </div>
    </div>
  )
}

export default Usedby