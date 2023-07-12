import React from 'react'
import './footer.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {GrInstagram} from 'react-icons/gr'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BiCodeAlt} from 'react-icons/bi'

const Footer = () => {
  return (
    <footer id="footer">
      <a href="https://hackertyper.net/#" target='__blank' className='footer__logo'><BiCodeAlt/></a>
      <ul className='permalinks'>
      {/* eslint-disable-next-line */}
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/renato.diaz.7731/" target='_blank' rel="noreferrer"><AiOutlineFacebook/></a>
        <a href="https://www.instagram.com/itsnotrenato/?hl=en" target='_blank' rel="noreferrer"><GrInstagram/></a>
        <a href="https://www.linkedin.com/in/renato-diaz/" target='_blank' rel="noreferrer"><AiOutlineLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small><a href="https://drive.google.com/file/d/1bteQ_t0mUiPN8bQEDtB_gcTEdY2ZojOK/view?usp=sharing" target='_blank' rel="noreferrer">&copy;</a> RENATO DIAZ. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer