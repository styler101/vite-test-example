import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

describe('App Component', () => {
  test('Ensure that header component be render on App component', () => {
    const { container } = render(<App />)
    const header = container.querySelector('header')
    expect(header).not.toBe(null)
  })
})
