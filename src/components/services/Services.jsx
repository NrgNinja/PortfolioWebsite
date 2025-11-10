import React from 'react'
import './services.css'
import {CgStark} from 'react-icons/cg'

const Services = () => {
  return (
    <section id='services'>
      <h2>Work Experience</h2>
      <div className="container services__container">

      {/* Work Experience 1 */}
        <article className="service">
          <div className="service__head">
            <h3>SWE Intern @ Endpoint</h3>
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
        {/* End of Work Experience 1 */}

        {/* Work Experience 2 */}
        <article className="service">
          <div className="service__head">
            <h3>Big Data SWE Intern @ Illinois Tech</h3>
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
              <p>Cryptographic hash tool for PoSpace</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>On-site position (based in IL)</p>
            </li>
          </ul>
        </article>
        {/* End of Work Experience 2 */}

        {/* Work Experience 3 */}
        <article className="service">
          <div className="service__head">
            <h3>SWE Intern @ Autodesk</h3>
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
        {/* End of Work Experience 3 */}

        {/* Work Experience 4 */}
        <article className="service">
          <div className="service__head">
            <h3>SWE @ Honeywell Aerospace</h3>
          </div>

          <ul className='service__list'>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Fullstack development</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>C | C# | C++ Programming Language</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Space & Defense Department</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Agile (Kanban) Methodologies</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Embedded systems programming</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>On-site position (based in FL)</p>
            </li>
          </ul>
        </article>
        {/* End of Work Experience 4 */}

      </div>
    </section>
  )
}

export default Services