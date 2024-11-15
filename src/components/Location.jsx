import React from 'react'
import Map from '../assets/images/map.svg'

const Location = () => {
  return (
    <section id='location'>
        <div className='container'>
            <div className='map'>
                <img src={Map} alt="Google map" />
            </div>

            <div className='contact-info'>
                <h3 className='med-center-1'>Medical Center 1</h3>

                <i className="fa-solid fa-location-dot"> <span>4517 Washington Ave. Manchester, Kentucky 39495</span></i>
                <i className="fa-solid fa-phone"><span>(406) 555-0120</span></i>
                <i className="fa-solid fa-clock"><span><b>Mon – Fri:</b> 9:00 am – 22:00 am<br/><b className='weekend'>Sat – Sun:</b> 9:00 am – 20:00 am</span></i>
                
                <h3 className='med-center-2'>Medical Center 2</h3>

                <i className="fa-solid fa-location-dot"> <span>2464 Royal Ln. Mesa,New Jersey 45463</span></i>
                <i className="fa-solid fa-phone"><span>(406) 544-0123</span></i>
                <i className="fa-solid fa-clock"><span><b>Mon – Fri:</b> 9:00 am – 22:00 am<br/><b className='weekend'>Sat – Sun:</b> 9:00 am – 20:00 am</span></i>

                <div className='social-media'>
                    <i className="fa-brands fa-facebook btn-circle"></i>
                    <i className="fa-brands fa-x-twitter btn-circle"></i>
                    <i className="fa-brands fa-instagram btn-circle"></i>
                    <i className="fa-brands fa-youtube btn-circle"></i>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Location