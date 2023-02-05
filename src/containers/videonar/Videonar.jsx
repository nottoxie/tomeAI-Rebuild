import React from 'react'
import './videonar.css'
import video5 from '../../assets/vidnar.mp4'

const Videonar = () => {
  return (
    <div className='tome__videonar' section__padding>
    <div className='tome__videonar-heading'>
      <h3>Video narration that<br></br>brings your story to life.</h3>
    </div>
    <div className='tome__videonar-paragraph'> 
        <p>Native video recording lets you talk through a nuanced point or simply add a personal touch to your story, even async.</p>
    </div>
    <div className='tome__videonar-video'>
    <video src={video5} autoPlay="true" muted loop width={800}/>
    </div>
</div>
  )
}

export default Videonar