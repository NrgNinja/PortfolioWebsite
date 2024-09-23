import React from 'react'
import RESUME from '../../assets/resumeSep2024.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={RESUME} download className='btn'>Download Resume (PDF)</a>
        <a href="https://www.linkedin.com/in/renato-diaz/" className=' btn btn-primary' target="_blank" rel="noreferrer">LinkedIn</a>
    </div>
  )
}

export default CTA