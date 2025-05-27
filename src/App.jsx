import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import BtnVerde from './components/BtnVerde'
import DeviceMockup from './components/DeviceMockup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <DeviceMockup />
    </>
  )
}

export default App
