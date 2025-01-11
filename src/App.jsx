import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import NavBar from './components/Navbar'
import Features from './components/Features'
import Story from './components/Story'
import FloatingImage from './components/Story'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='min-h-screen w-screen relative overflow-x-hidden'>
      <NavBar/>
      <Hero/>
     <About/>
     <Features/>
     <FloatingImage/>
     <Contact/>
    </div>
  )
}

export default App
