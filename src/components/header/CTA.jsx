import React from 'react'
import RESUME from '../../assets/resumeSept2023.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={RESUME} download className='btn'>Download Resume (PDF)</a>
        <a href="#contact" className='btn btn-primary'>Let's Get In Touch</a>
    </div>
  )
}

export default CTA