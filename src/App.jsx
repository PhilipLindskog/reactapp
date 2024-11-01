import React from 'react'
import './assets/css/main.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Brands from './components/Brands'
import Features from './components/Features'
import How from './components/How'
import FeaturesMore from './components/FeaturesMore'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import Subscribe from './components/Subscribe'

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <main>
        <Hero />
        <Brands />
        <Features />
        <How />
        <FeaturesMore />
        <Testimonials />
        <Faq />
        <Subscribe />
      </main>
      <Footer />
    </div>
  )
}

export default App