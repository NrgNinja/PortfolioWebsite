import React from 'react'
import useSectionReveals from './components/motion/useSectionReveals'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  useSectionReveals()
  return (
    <>
        <Header />
        <Nav />
        <main>
          <About />
          <Experience />
          <Services />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
    </>
  )
}

export default App