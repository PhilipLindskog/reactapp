import React from 'react'
import bell from '../assets/images/bell.svg'

const Subscribe = () => {
  return (
    <section id="subscribe">
        <div className="container">

            <div className="icon-text">
                <img className="icon-bell" src={bell} alt="Bell icon"/>
                <h4 className="headline">Subscribe to our newsletter</h4>
            </div>

            <div className="input-group">
                <i className="fa-regular fa-envelope icon"></i>
                <input id="email" className="form-input email" type="email" autocomplete="off" placeholder="Your email"/>
                <button className="btn-primary">Subscribe</button>
            </div>

        </div>
    </section>
  )
}

export default Subscribe