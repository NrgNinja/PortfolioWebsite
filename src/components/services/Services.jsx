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
              <p>Backend development</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Python Programming Language</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Automation Squad</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Agile (Scrum) Methodologies</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Unit & integration tests for prod</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Remote position (based in CA)</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX Section */}
        <article className="service">
          <div className="service__head">
            <h3>Intern, Big Data Researcher at Illinois Institute of Technology</h3>
          </div>

          <ul className='service__list'>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Backend development</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Rust Programming Language</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>DataSys Lab with Dr. Ioan Raicu</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Big Data & Blockchain Technology</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Cryptographic hash tool for PoS</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>On-site position (based in IL)</p>
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
              <p>Backend development</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Java Programming Language</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Cloud Licensing Team (Nimbus)</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Agile (Kanban) Methodologies</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Anomaly detectors for logs setup</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Remote position (based in CA)</p>
            </li>
          </ul>
        </article>
        {/* END OF Content Creation */}
      </div>
    </section>
  )
}

export default Services