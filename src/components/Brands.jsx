import React from 'react'
import brand1 from '../assets/images/brand-1.svg'
import brand2 from '../assets/images/brand-2.svg'
import brand3 from '../assets/images/brand-3.svg'
import brand4 from '../assets/images/brand-4.svg'
import brand5 from '../assets/images/brand-5.svg'
import brand6 from '../assets/images/brand-6.svg'

const Brands = () => {
  return (
    <section id="brands">
        <div className="container">
            <div id="brand-1" className="brand-box">
                <img src={brand1} alt=""/>
            </div>
            <div id="brand-2" className="brand-box">
                <img src={brand2} alt=""/>
            </div>
            <div id="brand-3" className="brand-box">
                <img src={brand3} alt=""/>
            </div>
            <div id="brand-4" className="brand-box">
                <img src={brand4} alt=""/>
            </div>
            <div id="brand-5" className="brand-box">
                <img src={brand5} alt=""/>
            </div>
            <div id="brand-6" className="brand-box">
                <img src={brand6} alt=""/>
            </div>
        </div>
    </section>
  )
}

export default Brands