import React from 'react'
import './services.css'
import {CgStark} from 'react-icons/cg'

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
              <CgStark className='service__list-icon'/>
              <p>Backend development.</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Python Programming Language.</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Automation Squad.</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Agile (Scrum) Framework.</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Unit & integration tests for prod.</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Remote position (based in CA).</p>
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
              <CgStark className='service__list-icon'/>
              <p>Part of the LEARN Program at UCF.</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>A.I. Nurse Assistance Solution.</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Dr. Chen Chen & Momal Ijaz.</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Published research paper (CVPR).</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Presented at research conferences.</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>On-site position (based in FL).</p>
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
              <CgStark className='service__list-icon'/>
              <p>Backend development.</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Java Programming Language.</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Cloud Licensing Team (Nimbus).</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Agile (Scrum) Framework.</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Anomaly detectors for logs setup.</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Remote position (based in CA).</p>
            </li>
          </ul>
        </article>
        {/* END OF Content Creation */}
      </div>
    </section>
  )
}

export default Services