import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/ye.png'

const Portfolio = () =>
{
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Project Title" />
          </div>
          <h3>Lift Log: Fitness Record Tracker</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/NrgNinja/HealthFitnessApp" className='btn' target='_blank'>Github</a>
            <a href="https://lift-log.herokuapp.com/login" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          {/* change this to whatever url you want */}
          {/* picuture must be 480 x 360 */}
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Project Title" />
          </div>
          <h3>The Lost Magic: A Medieval Fantasy Adventure</h3>
          <div className="portfolio__item-cta">
            <a href="https://drive.google.com/drive/folders/1lobmInvfC51iNCurIrLuB8hfzeQ0TYYg?usp=sharing" className='btn' target='_blank'>Presentations</a>
            <a href="https://nrgninja.itch.io/the-lost-magic-a-medieval-fantasy-adventure" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          {/* change this to whatever url you want */}
          {/* picuture must be 480 x 360 */}
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Project Title" />
          </div>
          <h3>Personal Portfolio Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/NrgNinja/PortfolioWebsite" className='btn' target='_blank'>Github</a>
            <a href="https://renatodiaz.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          {/* change this to whatever url you want */}
          {/* picuture must be 480 x 360 */}
        </article>
      </div>
    </section>
  )
}

export default Portfolio