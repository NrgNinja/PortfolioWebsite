import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/RADtransparentHD.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      {/* Added 'home-top' div here. It will act as the top of the Home section. */}
      <div id='home-top' style={{ height: '1px' }}></div>

      <div className="container header__container">
        <h5>Hello! My Name Is</h5>
        <h1>Renato Adolfo Diaz</h1>
        <h5 className="text-light">Software Engineer | Undergraduate Researcher | NACME | SHPE</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#footer" className='scroll__down'>Scroll To The Bottom</a>
      </div>
    </header>
  )
}

export default Header
