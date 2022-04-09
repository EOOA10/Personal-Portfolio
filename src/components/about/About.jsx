import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {BiTargetLock} from 'react-icons/bi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiTargetLock className='about__icon'/>
              <h5>Objective</h5>
              <small>Being part of a work team and consolidating myself professionally where performance is for the benefit of the company and personal me.</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>Know new development technologies and be part of projects that can improve the user experience.</small>
            </article>
          </div>
          <p>
            I am a person who likes to program, know and implement new technologies, who is willing to always learn from others, able to work in a team, under pressure, I like to abide by what is established in a project and deliver it in the stipulated time. 
          </p>
          <a href="#contacto" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about