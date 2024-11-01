import React from 'react'
import callIcon from '../assets/images/call-icon.svg'
import textIcon from '../assets/images/text-icon.svg'

const Faq = () => {
  return (
    <section id="faq">
        <div className="container">
            
            <div className="headline">
                <h2>Any questions? Check out the FAQs</h2>
                <p>Still have unanswered questions and need to get in touch?</p>
            </div>

            <div>
                <div className="card-faq">
                    <h4>What formats can I download my transaction history in?</h4>
                    <button className="btn-circle btn-faq">
                        <i className="fa-solid fa-chevron-down"></i>
                    </button>
                </div>

                <div className="card-faq faq-open">
                    <h4>Can I schedule future transfers?</h4>
                    <button className="btn-circle btn-faq">
                        <i className="fa-solid fa-chevron-down"></i>
                    </button>
                    <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                </div>
                
                

                <div className="card-faq">
                    <h4>When can I use Banking App services?</h4>
                    <button className="btn-circle btn-faq">
                        <i className="fa-solid fa-chevron-down"></i>
                    </button>
                </div>

                <div className="card-faq">
                    <h4>Can I create my own password that is easy for me to remember?</h4>
                    <button className="btn-circle btn-faq">
                        <i className="fa-solid fa-chevron-down"></i>
                    </button>
                </div>

                <div className="card-faq">
                    <h4>What happens if I forget or lose my password?</h4>
                    <button className="btn-circle btn-faq">
                        <i className="fa-solid fa-chevron-down"></i>
                    </button>
                </div>

                <div className="card-faq">
                    <h4>Is any of my personal information stored in the App?</h4>
                    <button className="btn-circle btn-faq">
                        <i className="fa-solid fa-chevron-down"></i>
                    </button>
                </div>
            </div>

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