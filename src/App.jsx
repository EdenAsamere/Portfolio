import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Features from './Components/Features/Features'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
function App() {
  return (
    <div className="transition-colors duration-300">
      <Navbar/>
      <Banner/>
      <Features/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
