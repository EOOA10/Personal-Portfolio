import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>

      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>

      <a href="#experiencia" onClick={() => setActiveNav('#experiencia')} className={activeNav === '#experiencia' ? 'active' : ''}><RiServiceLine/></a>

      <a href="#portafolio" onClick={() => setActiveNav('#portafolio')} className={activeNav === '#portafolio' ? 'active' : ''}><AiOutlineBook/></a>

      <a href="#contacto" onClick={() => setActiveNav('#contacto')} className={activeNav === '#contacto' ? 'active' : ''}><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav