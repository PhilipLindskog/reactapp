import React from 'react'
import showcaseLeft from '../assets/images/showcase-left.svg'
import showcaseMiddle from '../assets/images/showcase-middle.svg'
import showcaseRight from '../assets/images/showcase-right.svg'

const How = () => {
  return (
    <section id="how">
        <div className="container">
            <div className="headline">
                <h2>How Does It Work?</h2>
            </div>

            <div className="images">
                <img className="img-left" src={showcaseLeft} alt="app your cards screen"/>
                <img className="img-middle" src={showcaseMiddle} alt="app balance screen"/>
                <img className="img-right" src={showcaseRight} alt="app transfer screen"/>
            </div>

            <div className="content">
                <h3 className="headline">Transfers to people from your
                    contact list</h3>

                <p className="text">Proin volutpat mollis egestas. Nam luctus facilisis ultrices.
                    Pellentesque volutpat ligula est. Mattis fermentum, at nec
                    lacus.</p>
            </div>
            
        </div>
    </section>
  )
}

export default How