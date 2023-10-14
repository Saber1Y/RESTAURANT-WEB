import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
// import { MdOutlineRestaurantMenu } from 'react-icons/md'
import images from '../../constants/images'
import './Navbar.scss'


const Navbar = () => {
  return (
  <nav className='app__navbar'>
    <div className="app__navbar-logo">
      <img src={images.gericht} alt="app logo" />
    </div>
    <ul className="app__navbar-links">
      <li className='p__opensans'><a href="#home"></a>Home</li>
      <li className='p__opensans'><a href="#about"></a>About</li>
      <li className='p__opensans'><a href="#memu"></a>Menu</li>
      <li className='p__opensans'><a href="#awards"></a>Awards</li>
      <li className='p__opensans'><a href="#contact"></a>Contact</li>
    </ul>

  </nav>
  )
}

export default Navbar
