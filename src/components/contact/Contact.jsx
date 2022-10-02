import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <AiOutlineMail className='contact_option-icon'/>
             <h4>Email</h4>
             <h5>ayushbhatt1425@gmail.com</h5>
             <a href="mailto:ayushbhatt1425@gmail.com">Send a message</a>
          </article>

          <article className='contact_option'>
            <AiOutlineMessage className='contact_option-icon'/>
             <h4>Messanger</h4>
             <h5>ayushBhatt</h5>
             <a href="mailto:ayushbhatt1425@gmail.com">Send a message</a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
             <h4>What's app</h4>
             <h5>+9198989787</h5>
             <a href="mailto:ayushbhatt1425@gmail.com">Send a message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact