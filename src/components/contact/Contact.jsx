import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6219wtm', 'template_xzohvkf', form.current, '_KmOnjlN5lcY7jZeU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className='contact__option'>
          <HiOutlineMail className='contact__option-item'/>
          <h4>Email</h4>
          <h5>diazrenato2001@outlook.com</h5>
          <a href="mailto:diazrenato2001@outlook.com" target="_blank">Send an email</a>
        </article>
        <article className='contact__option'>
          <RiMessengerLine className='contact__option-item'/>
          <h4>Messsenger</h4>
          <h5>Renato A. Diaz</h5>
          <a href="https://m.me/renato.diaz.7731" target="_blank">Send a message</a>
        </article>
        <article className='contact__option'>
          <ImWhatsapp className='contact__option-item'/>
          <h4>WhatsApp</h4>
          <h5>+1 (407) 867-5309</h5>
          <a href="https://api.whatsapp.com/send?phone=3216631178" target="_blank">Send a text</a>
        </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact