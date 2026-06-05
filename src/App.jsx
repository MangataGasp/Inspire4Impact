import React from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Stories from './pages/Stories'
import About from './pages/About'
import Projects from './pages/Projects'
import Gallery from './pages/Gallery'
import Newsletter from './pages/Newsletter'
import Footer from './pages/Footer'
import { BrowserRouter, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className=''>
      {/* bg link: "https://vimeo.com/1133110842?fl=pl&fe=sh" */}
       <Navbar />
      <Hero />
      <Stories />
      <About />
      <Projects />
      <Gallery />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
