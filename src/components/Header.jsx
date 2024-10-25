import React from 'react'
import Logo from '../header/Logo'
import Navbar from '../header/Navbar'
import DarkmodeToggle from '../header/DarkmodeToggle'
import Signin from '../header/Signin'
import Mobilebutton from '../header/Mobilebutton'

const Header = () => {
  return (
    <header>
      <div className='container'>
        <Logo />
        <Navbar />
        <DarkmodeToggle />
        <Signin />
        <Mobilebutton />
      </div>
    </header>
  )
}

export default Header