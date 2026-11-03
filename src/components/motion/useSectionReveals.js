import { useEffect } from 'react'
import './motion.css'

export default function useSectionReveals() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    // Reveal individual cards rather than one tall section on a phone.
    const targets = [...document.querySelectorAll([
      'main section > h2', 'main section > h5', '.about__me', '.about__content',
      '.experience__container > div', '.service', '.portfolio__item',
      '.testimonials__container', '.contact__container',
    ].join(', '))]
    let observer
    const clear = () => {
      observer?.disconnect()
      targets.forEach(target => target.classList.remove('reveal', 'is-visible'))
    }
    const setup = () => {
      clear()
      if (preference.matches || !('IntersectionObserver' in window)) return
      observer = new IntersectionObserver(entries => {
        entries.forEach(({ target, isIntersecting }) => {
          target.classList.toggle('is-visible', isIntersecting)
        })
      }, { threshold: 0, rootMargin: '-16px 0px -32px 0px' })
      targets.forEach(target => {
        // Keep content already on screen visible when mounting or changing preferences.
        const rect = target.getBoundingClientRect()
        target.classList.toggle('is-visible', rect.bottom > 16 && rect.top < window.innerHeight - 32)
        target.classList.add('reveal')
        observer.observe(target)
      })
    }
    setup()
    preference.addEventListener('change', setup)
    return () => {
      preference.removeEventListener('change', setup)
      clear()
    }
  }, [])
}
