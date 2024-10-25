import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Brands from './components/Brands'
import Features from './components/Features'
import './assets/css/main.css'

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Hero />
      <Brands />
      <Features />
      <Footer />
    </div>
  )
}

export default App