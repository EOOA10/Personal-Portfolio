import React from 'react'
import './header.css'
import CV from './CV'
import ME from '../../assets/me2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Edison Ordoñez</h1>
        <h5 className="text-light">Systems Engineer</h5>
        <CV/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#portafolio" className='scroll__down'>Projects</a>
      </div>
    </header>
  )
}

export default Header