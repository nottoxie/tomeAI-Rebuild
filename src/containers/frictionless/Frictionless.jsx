import React from 'react'
import './frictionless.css'
import video3 from '../../assets/frictionless.mp4'

const Frictionless = () => {
  return (
    <div className='tome__frictionless' section__padding>
    <div className='tome__frictionless-heading'>
      <h3>Frictionless creation<br></br>meets magic design</h3>
    </div>
    <div className='tome__frictionless-paragraph'> 
        <p>Focus on your idea, and Tome will take care of the rest. Drag-and-drop creation, responsive pages, and one-click themes mean you don't waste time aligning content or applying brand colors.</p>
    </div>
    <div className='tome__frictionless-video'>
    <video src={video3} autoPlay="true" muted loop width={800}/>
    </div>
</div>
  )
}

export default Frictionless