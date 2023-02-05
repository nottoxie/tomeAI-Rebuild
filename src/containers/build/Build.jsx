import React from 'react'
import './build.css'
import video3 from '../../assets/build.mp4'
const Build = () => {
  return (
    <div className='tome__build' section__padding>
        <div className='tome__build-heading'>
          <h3>Build a powerful story <br></br>with any type of content.</h3>
        </div>
        <div className='tome__build-para'>
            <p>Type in a prompt and watch Tome <br></br>generate entire narratives from scratch or create additional content pages within seconds.<br></br> Use our DALL·E 2 tile to create compelling images, tailor-made to bring your idea to life.</p>
        </div>
        <div className='tome__build-video'>
          <video src={video3} autoPlay="true" muted loop width={800}/>
        </div>
    </div>
  )
}

export default Build