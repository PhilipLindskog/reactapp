import React from 'react'
import './assets/css/main.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Contact from './views/Contact'
import FeaturesViews from './views/FeaturesViews'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
      <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/features' element={<FeaturesViews />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
      <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App