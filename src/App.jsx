import { useState } from 'react'
import './App.css'

import Intro from './components/Intro'
import About from './components/About'
import Marqueee from './components/Marquee'
import Proof_of_work from './components/Proof_of_work'
function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <div className='body_container' >
        < Intro />
        < About />
        < Marqueee />
        <Proof_of_work />
      </div>
     
     
    </>
  )
}

export default App
