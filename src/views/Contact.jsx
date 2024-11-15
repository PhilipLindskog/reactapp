import React from 'react'

import Breadcrumb from '../components/Breadcrumb'
import ContactUs from '../components/ContactUs'
import ContactForm from '../components/ContactForm'
import Location from '../components/Location'

const Contact = () => {
    return (
        <>
            <section id="contact">
                <Breadcrumb />

                <div className='grid-container container'>
                    <ContactUs />
                    <ContactForm />
                </div>
            </section>
            <Location />
        </>
    )
}

export default Contact