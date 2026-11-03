import React from 'react'
import './header.css'
import CTA from './CTA'
import Typewriter from '../motion/Typewriter'
import ME from '../../assets/renato-nobg.png'

const Header = () => {
  return (
    <header id="home-top">
      <div className="container header__container">
        <h1>RENATO</h1>
        <h2 className="text-light" aria-label="Software Engineer">
          <Typewriter text="Software Engineer" />
        </h2>
        <CTA />
        <div className="me">
          <img src={ME} alt="Renato Diaz" />
        </div>

        <a href="#footer" className='scroll__down'>Scroll To The Bottom</a>
      </div>
    </header>
  )
}

export default Header
