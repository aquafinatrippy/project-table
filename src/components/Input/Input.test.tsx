import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from './index'
import { vi } from 'vitest'

describe('Input Component', () => {
  test('renders input with label', () => {
    render(<Input label="Test Label" value="" onChange={() => {}} />)
    const labelElement = screen.getByText(/test label/i)
    expect(labelElement).toBeInTheDocument()
  })

  test('calls onChange handler when input value changes', () => {
    const handleChange = vi.fn()
    render(<Input label="Test Label" value="" onChange={handleChange} />)
    const inputElement = screen.getByRole('textbox')
    fireEvent.change(inputElement, { target: { value: 'new value' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  test('applies filled class when input has value', () => {
    render(<Input label="Test Label" value="some value" onChange={() => {}} />)
    const labelElement = screen.getByText(/test label/i)
    expect(labelElement).toHaveClass('filled')
  })
})