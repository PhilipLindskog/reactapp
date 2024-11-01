import React from 'react'
import checkCircle from '../assets/images/check-circle.svg'
import featuresMoreRight from '../assets/images/feature-more-right.svg'
import featuresMoreLeft from '../assets/images/feature-more-left.svg'

const FeaturesMore = () => {
  return (
    <section id="features-more">
        <div className="container">

            <div className="square box-move">
                <h2>Make your money transfer simple and clear</h2>
                <ul>
                    <li><img src={checkCircle} alt=""/> Banking transactions are free for you</li>
                    <li><img src={checkCircle} alt=""/> No monthly cash commission</li>
                    <li><img src={checkCircle} alt=""/> Manage payments and transactions online</li>
                </ul>
                <a href="#" className="btn-primary">
                    Learn more
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>

            <div className="square">
                <img src={featuresMoreRight} alt="image of bank transactions"/>
            </div>

            <div className="square">
                <img src={featuresMoreLeft} alt="image of contact screen and bank card"/>
            </div>

            <div className="square box-move">
                <h2>Receive payment from international bank details</h2>
                <div className="flex-box">
                    <div className="text-box">
                        <img src="/images/payments-icon.svg" alt=""/>
                        <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                    </div>
                    <div className="text-box">
                        <img src="/images/cashback-icon.svg" alt=""/>
                        <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                    </div>
                </div>
                <a href="#" className="btn-primary">
                    Learn more
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>

        </div>
    </section> 
  )
}

export default FeaturesMore