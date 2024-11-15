import React from 'react'

import Hero from '../components/Hero'
import Brands from '../components/Brands'
import Features from '../components/Features'
import How from '../components/How'
import FeaturesMore from '../components/FeaturesMore'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'
import Subscribe from '../components/Subscribe'

const Home = () => {
    return (
        <>
           <Hero />
           <Brands />
           <Features />
           <How />
           <FeaturesMore />
           <Testimonials />
           <Faq />
           <Subscribe /> 
        </>
    )
}

export default Home