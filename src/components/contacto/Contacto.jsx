import { React, useRef } from 'react'
import emailjs from 'emailjs-com'
import './contacto.css'
import { MdOutlineEmail } from 'react-icons/md'

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ppjp3p5', 'template_76qhtnf', form.current, 'jrg7rum8ufQOJb_Na')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contacto'>
      <h5>Send a Message</h5>
      <h2>Contact Me</h2>
      <div className="container contacto__conteiner">
        <div className="opciones__contacto">
          <article className="opcion__contacto">
            <MdOutlineEmail className="contacto__opcion-icon"/>
            <h4>Email</h4>
            <h5>edisonomarordonez@gmail.com</h5>
            <a href="mailto:edisonomarordonez@gmail.com">Enviar Mensaje</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Enter your Full Name' required/>
          <input type="email" name="email" placeholder="Enter your Email" required/>
          <textarea name="mensaje" rows="7" placeholder="Enter a Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacto