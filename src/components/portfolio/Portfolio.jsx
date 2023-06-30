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
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          {/* change this to whatever url you want */}
          {/* picuture must be 480 x 360 */}
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Project Title" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          {/* change this to whatever url you want */}
          {/* picuture must be 480 x 360 */}
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Project Title" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          {/* change this to whatever url you want */}
          {/* picuture must be 480 x 360 */}
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Project Title" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          {/* change this to whatever url you want */}
          {/* picture must be 480 x 360 */}
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Project Title" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          {/* change this to whatever url you want */}
          {/* picuture must be 480 x 360 */}
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Project Title" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          {/* change this to whatever url you want */}
          {/* picuture must be 480 x 360 */}
        </article>
      </div>
    </section>
  )
}

export default Portfolio