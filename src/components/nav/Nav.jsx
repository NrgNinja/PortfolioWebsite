import React, { useEffect, useState } from 'react'
import './nav.css'
import {LuHome} from 'react-icons/lu'
import {BiUser} from 'react-icons/bi'
import {RiLightbulbFlashLine} from 'react-icons/ri'
import {MdOutlineHandshake} from 'react-icons/md'
import {BiMessageDetail} from 'react-icons/bi'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveNav(`#${entry.target.id}`)
        }
      })
    }, { threshold: 0.3 }) // adjust the threshold as needed

    const sections = document.querySelectorAll('section')
    sections.forEach(section => {
      observer.observe(section)
    })

    return () => {
      sections.forEach(section => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><LuHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><RiLightbulbFlashLine/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdOutlineHandshake/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav
