import { useState } from 'react'
import './App.css'

import Intro from './components/Intro'
import About from './components/About'
import Marqueee from './components/Marquee'
import Proof_of_work from './components/Proof_of_work'
import ContactUs from './components/ContacUs'
import Navbar from './components/Navbar'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <div className='body_container' >
        < Intro />
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
