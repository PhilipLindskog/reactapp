import React from 'react'
import LogoType from '../assets/images/logo.svg'
import LogoTypeDark from '../assets/images/logo_darkmode.svg'

const Logo = () => {
  return (
    <>
        <a id="logo" href="index.html">
          <img className="show-light" src={LogoType} alt="Silicon Logotype"/>
          <img className="show-dark" src={LogoTypeDark} alt="Silicon Logotype"/>
        </a>
    </>
  )
}

export default Logo