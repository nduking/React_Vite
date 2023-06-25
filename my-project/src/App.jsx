import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainComponent from './componets/hcomp/MainComponent'
import Footer from './componets/hcomp/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <MainComponent/>
    <Footer/>
    </>
  )
}

export default App
