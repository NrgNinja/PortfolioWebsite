import { act, render, screen } from '@testing-library/react'
import Typewriter from './Typewriter'

let preference
let onPreferenceChange

beforeEach(() => {
  jest.useFakeTimers()
  preference = {
    matches: false,
    addEventListener: jest.fn((event, listener) => { onPreferenceChange = listener }),
    removeEventListener: jest.fn(),
  }
  window.matchMedia = jest.fn(() => preference)
})

afterEach(() => {
  jest.useRealTimers()
})

function renderCaption() {
  return render(<h2 aria-label="Software Engineer"><Typewriter text="Software Engineer" /></h2>)
}

test('types once, preserves the accessible caption, and stops scheduling work', () => {
  const { container, unmount } = renderCaption()
  const typed = container.querySelector('.typewriter__text')
  expect(screen.getByRole('heading', { name: 'Software Engineer' })).toBeTruthy()
  expect(typed.textContent).toBe('')
  act(() => { jest.advanceTimersByTime(430) })
  expect(typed.textContent).toBe('Sof')
  act(() => { jest.runAllTimers() })
  expect(typed.textContent).toBe('Software Engineer')
  expect(jest.getTimerCount()).toBe(0)
  unmount()
  expect(preference.removeEventListener).toHaveBeenCalledWith('change', onPreferenceChange)
})

test('shows the complete caption immediately if reduced motion is enabled mid-animation', () => {
  const { container, unmount } = renderCaption()
  act(() => {
    preference.matches = true
    onPreferenceChange()
  })
  expect(container.querySelector('.typewriter__text').textContent).toBe('Software Engineer')
  expect(jest.getTimerCount()).toBe(0)
  unmount()
})

test('does not start typing for visitors who already prefer reduced motion', () => {
  preference.matches = true
  const { container } = renderCaption()
  expect(container.querySelector('.typewriter__text').textContent).toBe('Software Engineer')
  expect(jest.getTimerCount()).toBe(0)
})
