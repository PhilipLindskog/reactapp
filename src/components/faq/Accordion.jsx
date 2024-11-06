import React, { useEffect, useState } from 'react'

const Accordion = () => {

    return (
        <div className='faq'>
            <div className="card-faq">
                <h4>What formats can I download my transaction history in?</h4>
                <button className="btn-circle btn-faq">
                    <i className="fa-solid fa-chevron-down"></i>
                </button>
            </div>

            <div className="card-faq open">
                <div className='question'>
                    <h4>Can I schedule future transfers?</h4>
                    <button className="btn-circle btn-faq">
                        <i className="fa-solid fa-chevron-down"></i>
                    </button>
                </div>
                <div className='answer'>
                    <div className='expandable'>
                        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                    </div>
                </div>
            </div>
            
            

            <div className="card-faq">
                <h4>When can I use Banking App services?</h4>
                <button className="btn-circle btn-faq">
                    <i className="fa-solid fa-chevron-down"></i>
                </button>
                <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
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
    )
}

export default Accordion