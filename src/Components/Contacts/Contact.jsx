import React from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';
import {useRef} from "react";
import { themeContext } from '../../Context'
import { useContext } from 'react'


const Contact = () => {
    const btn = document.getElementById('button');
   
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rbtzkw9', 'template_9zcci2d', form.current, '4pvjd0AF7a_PssvmI')
    .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  };

  const theme=useContext(themeContext);
  const darkMode= theme.state.darkMode;

  return (
    <div className="contact-form" >
    <div className="w-left">
        <div className="awesome">
            <span style={{color: darkMode? 'white': ''}}>Get in touch</span>
            <span>Contact me</span>
            <div className="blur s-blurl" style={{background:"#ABF1FF94"}}>
            </div>
        </div>
    </div>
    <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
        <textarea name="message"  className='user' placeholder='Message'/>
        <input type="submit" value="send" className='button'/>
        <div className="blur c-blurl" style={{background:"var(--purple)"}}>
            </div>
            </form>
    </div>
</div>
   
  )
}

export default Contact
