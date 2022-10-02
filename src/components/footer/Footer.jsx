import React from 'react'
import './footer.css'
import {AiOutlineFacebook} from "react-icons/ai"
import {BsInstagram} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>AYUSH</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_social">
        <a href="https://facebook.com"><AiOutlineFacebook/></a>
        <a href="https://instagram.com"><BsInstagram/></a>
        <a href="https://linkedin.com"><AiFillLinkedin/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; AYUSH_BHATT. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer