import React from 'react'
import './easeshare.css'
import video6 from '../../assets/easysharing.png'

const Easeshare = () => {
  return (
    <div className='tome__easeshare' section__padding>
    <div className='tome__easeshare-heading'>
      <h3>A collaborative AI partner,<br></br>right at your fingertips.</h3>
    </div>
    <div className='tome__easeshare-paragraph'> 
        <p>Type in a prompt and watch Tome generate entire narratives from scratch or create additional content pages within seconds. Use our DALL·E 2 tile to create compelling images, tailor-made to bring your idea to life.</p>
    </div>
    <div className='tome__easeshare-video'>
    <img src={video6} width="900px" alt="easeshare"/>
    </div>
</div>
  )
}

export default Easeshare