import { useState } from 'react'
import './App.css'
import "./styles/cosmic.css" // for start and shooting start effect

import Intro from './components/Intro'
import About from './components/About'
import Marqueee from './components/Marquee'
import Proof_of_work from './components/Proof_of_work'
import ContactUs from './components/ContacUs'
import Navbar from './components/Navbar'

// import Cosmic from "./components/Cosmic"

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
    <div className="star_container">
      <div className="shooting_start"></div>
    </div>
      <div className='body_container' >
        {/* <Cosmic> */}
          < Intro />
        {/* </Cosmic> */}
        
        < About />
        < Marqueee />
        <Proof_of_work />
        < ContactUs />
        < Navbar />
      </div>
     
     
    </>
  )
}

export default App
