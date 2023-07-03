import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/ye.png'
import IMG2 from '../../assets/tlm.png'
import IMG3 from '../../assets/lift-log.png'
import IMG4 from '../../assets/nurse.png'

const Portfolio = () =>
{
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Project Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Project Title" />
          </div>
          <h3>Lift Log: Fitness Record Tracker (MERN Stack Web Application)</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/NrgNinja/HealthFitnessApp" className='btn' target='_blank'>Github</a>
            <a href="https://lift-log.herokuapp.com/login" className='btn btn-primary' target='_blank'>Web Application</a>
          </div>
          {/* change this to whatever url you want */}
          {/* picuture must be 480 x 360 */}
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="The Lost Magic" />
          </div>
          <h3>The Lost Magic: A Medieval Fantasy Adventure (2D Game)</h3>
          <div className="portfolio__item-cta">
            <a href="https://drive.google.com/drive/folders/1lobmInvfC51iNCurIrLuB8hfzeQ0TYYg?usp=sharing" className='btn' target='_blank'>Presentations</a>
            <a href="https://nrgninja.itch.io/the-lost-magic-a-medieval-fantasy-adventure" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          {/* change this to whatever url you want */}
          {/* picuture must be 480 x 360 */}
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="Project Title" />
          </div>
          <h3>Multimodal Transformer for Nursing Activity Recognition</h3>
          <div className="portfolio__item-cta">
            <a href="https://drive.google.com/file/d/1g7xPzERJFoj2HvsNlz5AFG_4evEfMzQx/view?usp=sharing" className='btn' target='_blank'>Poster</a>
            <a href="https://arxiv.org/pdf/2204.04564.pdf" className='btn btn-primary' target='_blank'>Research Paper</a>
          </div>
          {/* change this to whatever url you want */}
          {/* picuture must be 480 x 360 */}
        </article>
      </div>
    </section>
  )
}

export default Portfolio