import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './Components/HeroSection'
import Projects from './Components/Projects'
import About from './Components/About'
function App() {

  return (
    <>
      <HeroSection />
      <Projects />
      <About/>
    </>
  )
}

export default App
