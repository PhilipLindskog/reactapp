import React from 'react'

const ContactUs = () => {
  return (
    <div className='contact-container'>
        <h1>Contact us</h1>

        <div className='contact-box'>
            <i className="fa-regular fa-envelope btn-circle"></i>
            <div className='contact-text'>
                <h2>Email us</h2>
                <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
                <a href="#">Contact us<i className="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>

        <div className='contact-box'>
            <i class="fa-solid fa-user-plus btn-circle"></i>
            <div className='contact-text'>
                <h2>Careers</h2>
                <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                <a href="#">Send an application<i className="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>

    </div>
  )
}

export default ContactUs