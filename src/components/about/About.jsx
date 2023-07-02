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

          {/* this is where your biography paragraph goes, DO NOT GO OVER 60 WORDS! */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nesciunt voluptatibus
            repellendus fugit dolore nulla nihil necessitatibus eveniet officiis libero. Nobis 
            asperiores natus voluptates totam officia. Velit provident, culpa, ipsum ea qui 
            inventore illo explicabo sint, nemo reiciendis maiores aliquam fugiat tempore soluta 
            alias dolorem aspernatur labore nostrum vel cumque dolores! Quos itaque consectetur 
            soluta veritatis accusantium nostrum reprehenderit libero?
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About