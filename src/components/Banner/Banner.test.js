import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Banner from './Banner'

// Necessary due to bug
// https://github.com/testing-library/react-testing-library/issues/470
Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
    set: () => null,
})

Object.defineProperty(window, 'scrollTo', {
    configurable: true,
})
window.scrollTo = jest.fn()

describe('<Banner />', () => {
    it('should render', () => {
        const { container } = render(<Banner />)

        expect(container).toMatchSnapshot()
    })

    it('should call window scroll method when Products button was clicked', async () => {
        const { getByRole } = render(<Banner />)

        fireEvent.click(getByRole('button'))

        expect(window.scrollTo).toHaveBeenCalled()
    })
})
