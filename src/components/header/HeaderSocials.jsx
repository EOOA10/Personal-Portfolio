import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/EOOA10" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials