import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Have To Offer</h5>
      <h2>Notable Service & Work Experience</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Intern, Software Engineer at Endpoint</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Backend development.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX Section */}
        <article className="service">
          <div className="service__head">
            <h3>Undergraduate Researcher for the UCF Center For Research In Computer Vision</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Part of the LEARN Program at UCF.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Intern, Software Engineer at Autodesk</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Backend development.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF Content Creation */}
      </div>
    </section>
  )
}

export default Services