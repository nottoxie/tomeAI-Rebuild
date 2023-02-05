import React from 'react'
import './live.css'
import video3 from '../../assets/live.mp4'

const Live = () => {
  return (
    <div className='tome__live' section__padding>
    <div className='tome__live-heading'>
      <h3>Live, interactive<br></br> content from the web.</h3>
    </div>
    <div className='tome__live-paragraph'> 
        <p>Embed anything from the web, in one place. Live integrations with your favorite tools like Figma let you showcase your existing work as a connected part of your story.</p>
    </div>
    <div className='tome__live-video'>
    <video src={video3} autoPlay="true" muted loop width={800}/>
    </div>
</div>
  )
}

export default Live