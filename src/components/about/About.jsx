import React from 'react'
import './about.css'
import ME from '../../assets/renato.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { LuFolderOpen } from 'react-icons/lu'

const About = () =>
{
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            {/* here lies each individual card, you can add more by copying each article tag */}
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>5+ Years Programming</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>Other People</small>
            </article>

            <article className='about__card'>
              <LuFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>A Lot LOL</small>
            </article>

          </div>

          {/* this is where your biography paragraph goes */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore unde fugit quo officiis delectus amet molestias ipsam alias vero fuga asperiores eum quidem nesciunt quibusdam culpa, quas nostrum maxime cum!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About