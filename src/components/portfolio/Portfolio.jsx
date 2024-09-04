import React from 'react'
import './portfolio.css'
import IMG2 from '../../assets/tlm.png'
import IMG3 from '../../assets/lift-log.png'
import IMG4 from '../../assets/nurse.png'
import IMG5 from '../../assets/vault.png'
import IMG6 from '../../assets/logo-color.png'

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
          <h3>Lift Log: <br />Fitness Record Tracker</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/NrgNinja/HealthFitnessApp" className='btn' target='_blank' rel="noreferrer">Repository</a>
            <a href="https://lift-log.herokuapp.com/login" className='btn btn-primary' target='_blank' rel="noreferrer">Web App</a>
          </div>
          {/* change this to whatever url you want */}
          {/* picture must be 480 x 360 */}
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="The Lost Magic" />
          </div>
          <h3>The Lost Magic: <br /> A Medieval Fantasy Adventure</h3>
          <div className="portfolio__item-cta">
            <a href="https://youtu.be/etx_1UUHOF8?si=jOd6PLt6WxyZdEdT&t=3874" className='btn' target='_blank' rel="noreferrer">Gameplay</a>
            <a href="https://nrgninja.itch.io/the-lost-magic-a-medieval-fantasy-adventure" className='btn btn-primary' target='_blank' rel="noreferrer">Web App</a>
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
            <a href="https://drive.google.com/file/d/1g7xPzERJFoj2HvsNlz5AFG_4evEfMzQx/view?usp=sharing" className='btn' target='_blank' rel="noreferrer">Poster</a>
            <a href="https://ieeexplore.ieee.org/document/9857060" className='btn btn-primary' target='_blank' rel="noreferrer">Research Paper</a>
          </div>
          {/* change this to whatever url you want */}
          {/* picuture must be 480 x 360 */}
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="Project Title" />
          </div>
          <h3>ASL-Live: <br /> ASL-to-Text Translator</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/NrgNinja/ASLive" className='btn' target='_blank' rel="noreferrer">Repository</a>
            <a href="https://asl-live.com/" className='btn btn-primary' target='_blank' rel="noreferrer">Web App</a>
          </div>
          {/* change this to whatever url you want */}
          {/* picture must be 480 x 360 */}
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="Project Title" />
          </div>
          <h3>Vault-76: A Multithreaded Cryptographic Hash Tool</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/NrgNinja/vault-76" className='btn' target='_blank' rel="noreferrer">Repository</a>
            <a href="https://drive.google.com/drive/folders/1cGGMjzK9cpAx3yQG1QCAbt-u4y9FN1ng?usp=sharing" className='btn btn-primary' target='_blank' rel="noreferrer">Presentations</a>
          </div>
          {/* change this to whatever url you want */}
          {/* picture must be 480 x 360 */}
        </article>
      </div>
    </section>
  )
}

export default Portfolio