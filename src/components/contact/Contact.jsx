import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle');

  const sendEmail = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      // These are EmailJS browser identifiers; delivery settings live in EmailJS.
      await emailjs.sendForm('service_6219wtm', 'template_xzohvkf', form.current, '_KmOnjlN5lcY7jZeU');
      form.current.reset(); // Preserve the visitor's message if delivery fails.
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id='contact'>
      <h5>Let's Talk Business</h5>
      <h2>Contact Information</h2>

      <div className="container contact__container">
        <form ref={form} onSubmit={sendEmail} aria-busy={status === 'sending'}>
          <fieldset disabled={status === 'sending'}>
          <label htmlFor="contact-name">Full name</label>
          <input id="contact-name" autoComplete="name" type="text" name='name' placeholder='Type Your Full Name' required onChange={() => setStatus('idle')} />
          <label htmlFor="contact-email">Email address</label>
          <input id="contact-email" autoComplete="email" type="email" name='email' placeholder='Type Your Email Address' required onChange={() => setStatus('idle')} />
          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" rows="7" placeholder='Type Your Message' required onChange={() => setStatus('idle')}></textarea>
          <button type="submit" className="btn btn-primary">
            {status === 'sending' ? 'Sending…' : <>Send A <strong>Fancy</strong> Message</>}
          </button>
          </fieldset>
          <p className="contact__status" role="status" aria-live="polite">
            {status === 'success' && 'Your fancy message has been sent to Renato :D'}
            {status === 'error' && 'Your message could not be sent. Please try again. Your text is still here.'}
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
