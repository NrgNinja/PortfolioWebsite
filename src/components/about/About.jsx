import React from 'react'
import './about.css'
import ME from '../../assets/landscape-1200.webp'
import ME_SMALL from '../../assets/landscape-640.webp'
import { FaGithub, FaGlobeAmericas } from "react-icons/fa";
import { LuPalmtree } from 'react-icons/lu'
import { TbSchool } from 'react-icons/tb'
import { SiGooglescholar, SiLeetcode } from 'react-icons/si'

const About = () =>
{
  return (
    <section id='about'>
      <h2>About</h2>

      <div className='container about__container'>

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} srcSet={`${ME_SMALL} 640w, ${ME} 1200w`} sizes="(max-width: 800px) 90vw, 40vw" width="1200" height="1200" alt="Renato outdoors" loading="lazy" decoding="async" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            {/* here lies each individual card, you can add more by copying each article tag */}
            <article className='about__card'>
            <FaGlobeAmericas className='about__icon'/>
              <h5>Citizenship</h5>
              <small>US Citizen</small>
            </article>

            <article className='about__card'>
              <LuPalmtree className='about__icon' />
              <h5>Based In</h5>
              <small>Greater Tampa Bay</small>
            </article>

            <article className='about__card'>
              <TbSchool className='about__icon' />
              <h5>B.S. Degree</h5>
              <small>Computer Science</small>
            </article>

          </div>

          {/* Keep organization links understated while preserving keyboard focus styles. */}
          <p>
            Renato is a Software Engineer at <strong><a className="about__inline-link" href="https://www.honeywellaerospace.com/" target="_blank" rel="noreferrer">Honeywell Aerospace</a></strong>, where he develops test software for space & defense programs and helps verify that changes are ready for release. He graduated with a <i>Bachelor's Degree in Computer Science</i> from the <strong><a className="about__inline-link" href="https://www.ucf.edu/" target="_blank" rel="noreferrer">University of Central Florida</a></strong>.{' '}
            His research spans robot vision and AI at UCF, assistive technology at Cornell University, and blockchain consensus at Illinois Tech. His interests include machine learning, big data, and game development.
          </p>

          <p>
            Outside work, Renato stays active through boxing and other combat sports. His favorite pastime is trying new restaurants and cuisines. He also loves cars, and his dream car is the Porsche 911 Turbo S.
          </p>

          <div className="about__actions">
            <a href="#contact" className='btn btn-primary'>Contact</a>
            <a href="https://github.com/NrgNinja" className='btn about__social-button' target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><FaGithub aria-hidden="true" /><span className="about__button-label">GitHub</span></a>
            <a href="https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AETOMgEdzcW9UbzUVRLRKDZhZE3AdR2l7OF4yP3HvxBK5zzN4CDEYPHL5xendVwRZ5VGJaMIgPDlaPpFpdJ_Pmw30iFn&user=cgbwfMUAAAAJ" className='btn about__social-button' target="_blank" rel="noreferrer" aria-label="Google Scholar" title="Google Scholar"><SiGooglescholar aria-hidden="true" /><span className="about__button-label">Google Scholar</span></a>
            <a href="https://leetcode.com/u/NrgNinja/" className='btn about__social-button' target="_blank" rel="noreferrer" aria-label="LeetCode" title="LeetCode"><SiLeetcode aria-hidden="true" /><span className="about__button-label">LeetCode</span></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About