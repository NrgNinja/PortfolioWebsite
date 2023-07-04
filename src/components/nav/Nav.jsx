import React, { useEffect, useState } from 'react'
import './nav.css'
import {TbHome} from 'react-icons/tb'
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

    // Add an observer for the 'home-top' div
    const homeTop = document.querySelector('#home-top') // New line
    observer.observe(homeTop) // New line

    return () => {
      sections.forEach(section => {
        observer.unobserve(section)
      })

      // Remove the observer from the 'home-top' div when cleaning up
      observer.unobserve(homeTop) // New line
    }
  }, [])

  return (
    <nav>
      {/* Changed the condition in the className to highlight when either '#home' or '#home-top' is active */}
      <a href="#home-top" onClick={() => setActiveNav('#home-top')} className={activeNav === '#home' || activeNav === '#home-top' ? 'active' : ''}><TbHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><RiLightbulbFlashLine/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : '' || activeNav === '#portfolio' ? 'active' : '' || activeNav === '#testimonials' ? 'active' : ''}><MdOutlineHandshake/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav
