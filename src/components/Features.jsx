import React from 'react'
import iphoneFeaturesDesctop from '../assets/images/iPhone-features_desktop.svg'
import card from '../assets/images/card.svg'
import paymentIcon from '../assets/images/payments-icon.svg'
import securityIcon from '../assets/images/security-icon.svg'
import statisticsIcon from '../assets/images/statistics-icon.svg'
import supportIcon from '../assets/images/support-icon.svg'
import cashbackIcon from '../assets/images/cashback-icon.svg'
import happyIcon from '../assets/images/happy-icon.svg'

const Features = () => {
  return (
    <section id="features">

        <div className="container">
            
            <div className="headline">
                <h2>App Features</h2>
                <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Proin volutpat mollis egestas.
                    Nam luctus facilisis ultrices. Pellentesque
                    volutpat ligula est. Mattis fermentum, at nec
                    lacus.</p>
            </div>

            <div className="images">
                <img className="img-back" src={iphoneFeaturesDesctop} alt="Iphone showing features"/>
                <img className="img-front" src={card} alt="visa card"/>
            </div>
            <div className="boxes">
                <div className="card">
                    <div className="icon">
                        <img src={paymentIcon} alt=""/>
                    </div>
                    <h2 className="headline">Easy Payment</h2>
                    <p className="text">Id mollis consectetur congue egestas
                        egestas suspendisse blandit justo.</p>
                </div>

                <div className="card">
                    <div className="icon">
                        <img src={securityIcon} alt=""/>
                    </div>
                    <h2 className="headline">Data Security</h2>
                    <p className="text">Augue pulvinar justo, fermentum
                        fames aliquam accumsan vestibulum
                        non.</p>
                </div>

                <div className="card">
                    <div className="icon">
                        <img src={statisticsIcon} alt=""/>
                    </div>
                    <h2 className="headline">Cost Statistics</h2>
                    <p className="text">Mattis urna ultricies non amet, purus
                        in auctor non. Odio vulputate ac nibh.</p>
                </div>

                <div className="card">
                    <div className="icon">
                        <img src={supportIcon} alt=""/>
                    </div>
                    <h2 className="headline">Support 24/7</h2>
                    <p className="text">A elementum, imperdiet enim, pretium
                        etiam facilisi in aenean quam mauris.</p>
                </div>

                <div className="card">
                    <div className="icon">
                        <img src={cashbackIcon} alt=""/>
                    </div>
                    <h2 className="headline">Regular Cashback</h2>
                    <p className="text">Sit facilisis dolor arcu, fermentum
                        vestibulum arcu elementum imperdiet
                        eleifend.</p>
                </div>

                <div className="card">
                    <div className="icon">
                        <img src={happyIcon} alt=""/>
                    </div>
                    <h2 className="headline">Top Standards</h2>
                    <p className="text">Faucibus cursus maecenas lorem
                        cursus nibh. Sociis sit risus id. Sit
                        facilisis dolor arcu..</p>
                </div>

            </div>
            

        </div>

    </section>
  )
}

export default Features