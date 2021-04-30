import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Header from './Header'

Object.defineProperty(window, 'scrollTo', {
    configurable: true,
})
window.scrollTo = jest.fn()

describe('<Header />', () => {
    it('should render', () => {
        const { container } = render(<Header />)

        expect(container).toMatchSnapshot()
    })

    it('should scroll to top when header logo was clicked', () => {
        const { getByText } = render(<Header />)

        fireEvent.click(getByText('PRODUCT PAGE'))

        expect(window.scrollTo).toBeCalled()
    })

    it('should set menu icon to fa-times when mobile menu is open', () => {
        const { getByTestId } = render(<Header />)

        fireEvent.click(getByTestId('menu-icon-wrapper'))

        expect(getByTestId('menu-icon').className).toBe('fas fa-times')
    })

    it('should set menu icon to fa-bars when mobile menu is closed', () => {
        const { getByTestId } = render(<Header />)

        expect(getByTestId('menu-icon').className).toBe('fas fa-bars')
    })

    it('should scroll to top when home items was clicked', () => {
        const { getByText } = render(<Header />)

        fireEvent.click(getByText('Home'))

        expect(window.scrollTo).toBeCalled()
    })
})
