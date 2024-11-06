import React from 'react'
import callIcon from '../assets/images/call-icon.svg'
import textIcon from '../assets/images/text-icon.svg'
import Accordion from './faq/Accordion'

const Faq = () => {
  return (
    <section id="faq">
        <div className="container">
            
            <div className="headline">
                <h2>Any questions? Check out the FAQs</h2>
                <p>Still have unanswered questions and need to get in touch?</p>
            </div>

            <Accordion />

            <div className="contact">
                <div className="contact-box box-1">
                    <img src={callIcon} alt="call icon"/>
                    <p>Still have questions?</p>
                    <a href="#">
                        <span>Contact us</span>
                        <span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
                    </a>
                </div>
                <div className="contact-box box 2">
                    <img src={textIcon} alt="call icon"/>
                    <p>Don't like phone calls?</p>
                    <a href="#">
                        <span>Contact us</span>
                        <span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
                    </a>
                </div>

                <div className="contact-btn">
                    <a href="#" className="btn-primary">Contact us now</a>
                </div>

            </div>

        </div>
    </section>
  )
}

export default Faq