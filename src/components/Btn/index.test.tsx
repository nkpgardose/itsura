import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import sinon from 'sinon'

import Btn from '.'

describe('Btn', () => {
	const defaultProps = {
    /**
     * Add isRequired props here.
     */
	}

	it('renders without crashing', () => {
		const wrapper = render(<Btn {...defaultProps}>Press me!</Btn>)
		expect(wrapper.getByText('Press me!')).toBeInTheDocument()
		fireEvent.click(wrapper.getByText('Press me!'))
	})

	it('renders with sizes value on className', () => {
		const { container: wrapper } = render(<Btn size="sm">Click me!</Btn>)
		expect(wrapper.firstChild).toHaveClass('sm')
	})

	it('renders default button type', () => {
		const { container } = render(<Btn>Click me!</Btn>)
		expect(container.firstChild).toHaveAttribute('type',
			'submit'
		)
	})

	it('simulate click events', () => {
		const onButtonClick = sinon.spy()
		const wrapper = render(<Btn onClick={onButtonClick}>Click Me!</Btn>)
		fireEvent.click(wrapper.getByText('Click Me!'))
		expect(onButtonClick).toHaveProperty('callCount', 1)
	})

	it('renders given variants on btn', () => {
		const { container } = render(<Btn variants="primary">Click Me!</Btn>)
		expect(container.firstChild).toHaveClass('primary')
	})
})
