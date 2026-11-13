import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import RESUME from '../../assets/resumeDec2026.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={RESUME} download className='btn'>Download Resume</a>
        <a href="https://www.linkedin.com/in/renato-diaz/" className='btn btn-primary cta__linkedin' aria-label='LinkedIn' title='LinkedIn' target="_blank" rel="noreferrer"><BsLinkedin aria-hidden="true" /><span className="cta__label">LinkedIn</span></a>
    </div>
  )
}

export default CTA