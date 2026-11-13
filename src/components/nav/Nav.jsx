import React, { useEffect, useState } from 'react'
import './nav.css'
import {TbHome} from 'react-icons/tb'
import {BiUser} from 'react-icons/bi'
import {RiLightbulbFlashLine} from 'react-icons/ri'
import {MdOutlineHandshake} from 'react-icons/md'
import {BiMessageDetail, BiGridAlt, BiChat} from 'react-icons/bi'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home-top')

  useEffect(() => {
    let frame = null
    const sections = Array.from(document.querySelectorAll('header[id], main section[id]')).reverse()
    // Read current positions so layout changes still affect the active link.
    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.35
      const section = sections.find(section => section.getBoundingClientRect().top <= marker)
      const current = section ? `#${section.id}` : '#home-top'
      setActiveNav(current)
      frame = null
    }
    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(updateActiveSection)
    }
    updateActiveSection()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame !== null) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <nav aria-label="Main navigation">
      {[
        ['#home-top', 'Home', TbHome],
        ['#about', 'About', BiUser],
        ['#experience', 'Technical skills', RiLightbulbFlashLine],
        ['#services', 'Work experience', MdOutlineHandshake],
        ['#portfolio', 'Projects', BiGridAlt],
        ['#testimonials', 'Testimonials', BiChat],
        ['#contact', 'Contact', BiMessageDetail],
      ].map(([href, label, Icon]) => (
        <a key={href} href={href} aria-label={label} title={label}
          aria-current={activeNav === href ? 'location' : undefined}
          className={activeNav === href ? 'active' : ''}>
          <Icon aria-hidden="true" />
        </a>
      ))}
    </nav>
  )
}

export default Nav
