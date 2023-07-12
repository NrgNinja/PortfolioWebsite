import React from 'react'
import './about.css'
import ME from '../../assets/renato.png'
import { FaLaptopCode } from 'react-icons/fa'
import { LuPalmtree } from 'react-icons/lu'
import { TbSchool } from 'react-icons/tb'

const About = () =>
{
  return (
    <section id='about'>
      <h5>Get To Know A Little More</h5>
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
              <FaLaptopCode className='about__icon' />
              <h5>Programming</h5>
              <small>Over 5+ Years</small>
            </article>

            <article className='about__card'>
              <LuPalmtree className='about__icon' />
              <h5>Based In</h5>
              <small>Orlando, Florida</small>
            </article>

            <article className='about__card'>
              <TbSchool className='about__icon' />
              <h5>Graduation</h5>
              <small>BCS | Fall 2024</small>
            </article>

          </div>

          {/* this is where your biography paragraph goes, DO NOT GO OVER 60 WORDS! */}
          <p>
          I am currently a senior pursuing a <i>Bachelor's Degree in Computer Science</i> at the <strong>University of Central Florida</strong>. 
          My interests lie in Machine Learning, Artificial Intelligence, & Game Development. Additionally, at my institution,
          I am an undergraduate researcher and work as a Peer Mentor for students interested in pursuing undergraduate
          research opportunities as well. I'm a firm believer that you miss every single opportunity that you don't take.
          After all, success starts with hard work and determination. I love to talk about all things tech, so why don't we have a conversation? Read more about me & let's connect on LinkedIn!
          </p>

          <a href="#contact" className='btn btn-primary'>Contact Me</a>
          <a href="https://www.linkedin.com/in/renato-diaz/" className='btn' target="_blank">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}

export default About