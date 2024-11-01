import React from 'react'
import testimonial1 from '../assets/images/testimonial-1.svg'
import testimonial2 from '../assets/images/testimonial-2.svg'

const Testimonials = () => {
  return (
    <section id="testimonials">

        <div className="container">

            <h2>Clients are Loving Our App</h2>

            <div className="img-box">
                <img src={testimonial1} alt="User testimonial"/>
                <img src={testimonial2} alt="User testimonial"/>
            </div>

        </div>
    </section>
  )
}

export default Testimonials