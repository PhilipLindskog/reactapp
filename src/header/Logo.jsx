import React from 'react'
import LogoType from '../assets/images/logo.svg'
import LogoTypeDark from '../assets/images/logo_darkmode.svg'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <>
        <Link id="logo" to="/">
          <img className="show-light" src={LogoType} alt="Silicon Logotype"/>
          <img className="show-dark" src={LogoTypeDark} alt="Silicon Logotype"/>
        </Link>
    </>
  )
}

export default Logo