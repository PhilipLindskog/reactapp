import React from 'react'
import bell from '../assets/images/bell.svg'
import SubscribeForm from './subscribe/SubscribeForm'

const Subscribe = () => {
  return (
    <section id="subscribe">
        <div className="container">

            <div className="icon-text">
                <img className="icon-bell" src={bell} alt="Bell icon"/>
                <h4 className="headline">Subscribe to our newsletter</h4>
            </div>

            <SubscribeForm />

        </div>
    </section>
  )
}

export default Subscribe