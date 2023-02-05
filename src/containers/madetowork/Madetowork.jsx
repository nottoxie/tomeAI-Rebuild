import React from 'react'
import './madetowork.css'
import video7 from '../../assets/madetowork.mp4'

const Madetowork = () => {
  return (
    <div className='tome__madetowork' section__padding>
    <div className='tome__madetowork-heading'>
      <h3>Made to work,<br></br>whenever you work.</h3>
    </div>
    <div className='tome__madetowork-paragraph'> 
        <p>With the Tome iOS app, you can seize a spark of inspiration or make a last minute edit right before the meeting. Your work syncs seamlessly across devices.</p>
    </div>
    <div className='tome__madetowork-video'>
    <video src={video7} autoPlay="true" muted loop width={500}/>
    </div>
</div>
  )
}

export default Madetowork