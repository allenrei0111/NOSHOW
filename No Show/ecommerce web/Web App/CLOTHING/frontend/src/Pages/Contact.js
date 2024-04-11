//reference from https://www.emailjs.com/docs/examples/reactjs/

import { useRef, useState } from 'react';
import './CSS/Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    emailjs
      .sendForm('service_r9qs95o', 'template_ofq9w7j', form.current, {
        publicKey: 'Jn69mmQROeuudPyZ5',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset(); // Reset the form
          setSuccessMessage('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          setErrorMessage('Failed to send message. Please try again later.');
        }
      );
  };

  const validateEmail = (e) => {
    const emailInput = e.target;
    const email = emailInput.value;
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValid) {
      emailInput.setCustomValidity('Please enter a valid email address.');
    } else {
      emailInput.setCustomValidity('');
    }
  };

  return (
    <section>
      <h4 className='contact'>Contact</h4>
      <div className="container">
        
        <form ref={form} onSubmit={sendEmail} className="form-control">
          <h2 className="--center-all">We'd Love to Hear from You!</h2>
          <p className="--center-all">Please feel free to share any concerns you have in the space provided below.</p>
        
          <input type="text" placeholder='Full Name' name='user_name' required />
          <input type="email" placeholder='Email' name='user_email' required onInput={validateEmail} />
          <input type="text" placeholder='Subject' name='subject' required />
          <textarea name="message" cols="30" rows="6" placeholder='Type Here'></textarea>

          <button type='submit' className="--center-all --btn-primary --btn">Send Message</button>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          {successMessage && <div className="success-message">{successMessage}</div>}
        </form>
        
      </div>
    </section>
  );
}

export default Contact;
