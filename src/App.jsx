import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experiencia from './components/experiencia/Experiencia'
import Portafolio from './components/portafolio/Portafolio'
import Contacto from './components/contacto/Contacto'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experiencia/>
      <Portafolio/>
      <Contacto/>
      <Footer/>
    </>
  )
}

export default App