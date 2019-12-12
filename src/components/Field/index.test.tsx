import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import sinon from 'sinon'

import Field from '.'

describe('Field', () => {
	const defaultProps = {
    /**
     * Add isRequired props here.
     */
		name: 'field',
		label: 'A sample field',
		type: 'text',
		onFieldChange() { }
	}

	it('renders without crashing', () => {
		expect(
			render(<Field {...defaultProps} />).getByLabelText('A sample field')
		).toBeInTheDocument()
	})

	it('simulate field change', () => {
		const onFieldChange = sinon.spy()
		const wrapper = render(
			<Field {...defaultProps} onFieldChange={onFieldChange} />
		)

		fireEvent.change(wrapper.getByLabelText('A sample field'), {
			target: { value: 'sample' }
		})
		expect(onFieldChange.called).toBe(true)
	})

	it('renders given variants on field', () => {
		const { container } = render(<Field variants="sample" {...defaultProps} />)

		expect(container.firstChild).toHaveClass('sample')
	})

	it('renders error element', () => {
		const { container } = render(
			<Field errorMsg="sample error message" {...defaultProps} />
		)

		expect(container.firstChild).toHaveClass('error')
	})

	it('renders textarea element', () => {
		const { container } = render(<Field {...defaultProps} type="textarea" />)

		expect(container.firstChild).toMatchInlineSnapshot(
			`
      <div
        class="Field"
      >
        <label
          class="label"
          for="field"
        >
          A sample field
        </label>
        <textarea
          class="input"
          id="field"
          name="field"
          placeholder=""
        />
      </div>
    `
		)
	})
})
