import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">EOOA10</a>

      <ul className="permalinks">
        <li><a href="#about">About Me</a></li>
        <li><a href="#experiencia">My Experience</a></li>
        <li><a href="#portafolio">Portfolio</a></li>
        <li><a href="#contacto">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/edison10ordonez/" target="_blank"><BsInstagram/></a>
        <a href="https://github.com/EOOA10" target="_blank"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/edison-omar-ordo%C3%B1ez-almendares-4a2b41234" target="_blank"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; EOOA10 Portafolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer