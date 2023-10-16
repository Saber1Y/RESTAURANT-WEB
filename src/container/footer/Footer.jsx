import React from 'react'
import { FooterOverlay, Newsletter } from '../../components';
import  './footer.scss'
// import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className='app__footer section__padding'>
      <FooterOverlay />
      <Newsletter />
    </div>
  )
}

export default Footer
