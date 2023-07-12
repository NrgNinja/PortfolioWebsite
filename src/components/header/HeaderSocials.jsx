import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {PiSealQuestionFill} from 'react-icons/pi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/renato-diaz/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/NrgNinja" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://matias.ma/nsfw/" target="_blank" rel="noreferrer"><PiSealQuestionFill/></a>
    </div>
  )
}

export default HeaderSocials