import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillQuestionCircle} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/renato-diaz/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/NrgNinja" target="_blank"><FaGithub/></a>
        <a href="https://matias.ma/nsfw/" target="_blank"><AiFillQuestionCircle/></a>
    </div>
  )
}

export default HeaderSocials