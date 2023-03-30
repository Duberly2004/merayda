import React from 'react'
import Footer from './components/Footer'
import NavbarComponent from './components/NavbarComponent'
import Bussineses from './pages/Bussineses'
import Home from './pages/Home'

function App() {
  return (
    <>
      <NavbarComponent/>
      <Home/>
      <Bussineses/>
      <Footer/>
    </>
  )
}
export default App