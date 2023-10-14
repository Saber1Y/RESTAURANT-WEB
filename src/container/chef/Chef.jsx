import React from 'react'
import { SubHeading } from '../../components'
import { images } from '../../constants'

const Chef = () => {
  return (
    <div className='app__bg app_wrapper section__padding'>
      <div className='app__wrapper_img app__wrapper-reverse'>
       <img src={images.chef} alt="chef" />
      </div>
      
    </div>
  )
}

export default Chef
