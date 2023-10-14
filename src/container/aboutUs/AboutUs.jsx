import React from 'react'
import { images } from '../../constants'
import './about.scss'

const AboutUs = () => {
  return (
    <div className='app__aboutuas app__bg flex__center section__padding' id='about'>
      <div className="app_aboutus-overlay flex__center">
        <img src={images.G} alt="G" />
      </div>

    </div>
  )
}

export default AboutUs
