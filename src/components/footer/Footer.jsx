import React from 'react'
import './footer.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {GrInstagram} from 'react-icons/gr'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BiCodeAlt} from 'react-icons/bi'

const Footer = () => {
  return (
    <footer id="footer">
      <a aria-label="Hacker Typer" href="https://hackertyper.net/#" target='_blank' rel='noreferrer' className='footer__logo'><BiCodeAlt/></a>
      <ul className='permalinks'>
        <li><a href="#home-top">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Technical Skills</a></li>
        <li><a href="#services">Work Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a aria-label="Facebook" href="https://www.facebook.com/renato.diaz.7731/" target='_blank' rel="noreferrer"><AiOutlineFacebook/></a>
        <a aria-label="Instagram" href="https://www.instagram.com/itsnotrenato/?hl=en" target='_blank' rel="noreferrer"><GrInstagram/></a>
        <a aria-label="LinkedIn" href="https://www.linkedin.com/in/renato-diaz/" target='_blank' rel="noreferrer"><AiOutlineLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small><a href="https://matias.ma/nsfw/" target='_blank' rel="noreferrer">&copy;</a> RENATO DIAZ. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer