import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Features from './Components/Features/Features'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Banner/>
     <Features/>
     <Projects/>
     <Contact/>
    </>
  )
}

export default App
