import React from 'react'
import './collab.css'
import video2 from '../../assets/collab.mp4'

const Collab = () => {
  return (
    <div className='tome__collab' section__padding>
          <div className='tome__collab-heading'>
            <h3>A collaborative AI partner,<br></br>right at your fingertips.</h3>
          </div>
          <div className='tome__collab-paragraph'> 
              <p>Type in a prompt and watch Tome generate entire narratives from scratch or create additional content pages within seconds. Use our DALL·E 2 tile to create compelling images, tailor-made to bring your idea to life.</p>
          </div>
          <div className='tome__collab-video'>
          <video src={video2} autoPlay="true" muted loop width={800}/>
          </div>
    </div>
  )
}

export default Collab