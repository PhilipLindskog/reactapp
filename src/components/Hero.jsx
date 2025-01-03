import React from 'react'
import appStore from '../assets/images/appstore.svg'
import appStoreDark from '../assets/images/appstore_dark.svg'
import googlePlay from '../assets/images/googleplay.svg'
import googlePlayDark from '../assets/images/googleplay_dark.svg'
import iphoneMybudgetDesktop from '../assets/images/iphone-mybudget_desktop.svg'
import iphoneYourCardsDesktop from '../assets/images/iphone-yourcards_desktop.svg'

const Hero = () => {
  return (
    <section id="hero">
        <div className="container">
            <div className="headline">
                <h1>Manage All Your Money in One App</h1>
            </div>

            <div className="content">
                <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
                <div className="buttons">
                    <a className="btn-download-app" href="#">
                        <img className='show-light' src={appStore} alt="appstore"/>
                        <img className='show-dark' src={appStoreDark} alt="appstore"/>
                    </a>
                    <a className="btn-download-app" href="#">
                        <img className='show-light' src={googlePlay} alt="google play"/>
                        <img className='show-dark' src={googlePlayDark} alt="google play"/>
                    </a>
                </div>

                <a href="#" className="discover-more">
                    <span className="btn-circle" href="#">
                        <i className="fa-solid fa-chevron-down"></i>
                    </span>
                    <span>Discover more</span>
                </a>
            </div>

            <div className="images">
                <img className="img-back" src={iphoneMybudgetDesktop} alt="iphone my budget"/>
                <img className="img-front" src={iphoneYourCardsDesktop} alt="iphone your cards"/>
            </div>
        </div>
    </section>
  )
}

export default Hero