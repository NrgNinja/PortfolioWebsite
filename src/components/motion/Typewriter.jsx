import { useEffect, useState } from 'react'
import './motion.css'

export default function Typewriter({ text }) {
  const [length, setLength] = useState(text.length)

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let timer
    const start = () => {
      clearTimeout(timer)
      if (preference.matches) {
        setLength(text.length)
        return
      }
      setLength(0)
      let next = 0
      const type = () => {
        next += 1
        setLength(next)
        if (next < text.length) timer = setTimeout(type, 65)
      }
      timer = setTimeout(type, 300)
    }
    start()
    preference.addEventListener('change', start)
    return () => {
      clearTimeout(timer)
      preference.removeEventListener('change', start)
    }
  }, [text])

  return (
    <span className="typewriter" aria-hidden="true">
      {/* Reserve the complete line so typing never shifts the surrounding layout. */}
      <span className="typewriter__measure">{text}</span>
      <span className="typewriter__text">
        {text.slice(0, length)}
        <span className={`typewriter__caret ${length === text.length ? 'is-finished' : ''}`} />
      </span>
    </span>
  )
}
