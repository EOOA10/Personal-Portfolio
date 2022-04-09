import React from 'react'
import './experiencia.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experiencia = () => {
  return (
    <section id='experiencia'>
      <h5>Development Areas</h5>
      <h2>My Experience</h2>

      <div className="container experiencia__container">
        <div className="experiencia__frontend">
          <h3>Frontend Development</h3>
          <div className="experiencia__content">
            <article className='detalle__experiencia'>
              <BsPatchCheckFill className='detalle__experiencia-icon'/>
              <div>
                <h4>HTML&CSS</h4>
                <small className="text-light">Medium</small>
              </div>
            </article>

            <article className='detalle__experiencia'>
              <BsPatchCheckFill className='detalle__experiencia-icon'/>
              <div>
                <h4>Angular</h4>
                <small className="text-light">Medium</small>
              </div>
            </article>

            <article className='detalle__experiencia'>
              <BsPatchCheckFill className='detalle__experiencia-icon'/>
              <div>
                <h4>React</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>

{/*===================================================================================*/ }
        
        <div className="experiencia__backend">
        <h3>Backend Development</h3>
          <div className="experiencia__content">
            <article className='detalle__experiencia'>
              <BsPatchCheckFill className='detalle__experiencia-icon'/>
              <div>
                <h4>C#</h4>
                <small className="text-light">Medium</small>
              </div>
            </article>

            <article className='detalle__experiencia'>
              <BsPatchCheckFill className='detalle__experiencia-icon'/>
             <div>
              <h4>JAVA</h4>
                <small className="text-light">Basic</small>
             </div>
            </article>

            <article className='detalle__experiencia'>
              <BsPatchCheckFill className='detalle__experiencia-icon'/>
             <div>
              <h4>JavaScript</h4>
                <small className="text-light">Basic</small>
             </div>
            </article>

            <article className='detalle__experiencia'>
              <BsPatchCheckFill className='detalle__experiencia-icon'/>
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Medium</small>
              </div>
            </article>
          </div>
        </div> 

{/*===================================================================================*/ }
        
<div className="experiencia__database">
        <h3>Database Managers</h3>
          <div className="experiencia__content">
            <article className='detalle__experiencia'>
              <BsPatchCheckFill className='detalle__experiencia-icon'/>
              <div>
                <h4>Microsoft SQL Server</h4>
                <small className="text-light">Medium</small>
              </div>
            </article>

            <article className='detalle__experiencia'>
              <BsPatchCheckFill className='detalle__experiencia-icon'/>
             <div>
              <h4>MySQL Workbench</h4>
                <small className="text-light">Basic</small>
             </div>
            </article>
          </div>
        </div> 
      </div>
    </section>
  )
}

export default Experiencia