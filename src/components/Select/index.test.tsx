import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import sinon from 'sinon'

import Select from '.'

describe('Select', () => {
	const defaultProps = {
    /**
     * Add isRequired props here.
     */
		name: 'Sample',
		label: 'Sample field',
		onSelectionChange() { },
		options: [{ value: 'apple', label: "Apple" }]
	}

	it('renders without crashing', () => {
		const wrapper = render(<Select {...defaultProps} />)
		expect(wrapper.getByLabelText('Sample field')).toBeInTheDocument()
	})

	it('renders error element', () => {
		const { container } = render(
			<Select errorMsg="sample error message" {...defaultProps} />
		)

		expect(container.firstChild).toHaveClass('error')
	})

	it('renders options elements', () => {
		const { container } = render(
			<Select
				{...defaultProps}
				errorMsg="sample error message"
				options={[{ value: 'sample', label: 'Sample' }]}
			/>
		)

		expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="Field Select error"
      >
        <label
          class="label"
          for="Sample"
        >
          Sample field
        </label>
        <select
          class="input"
          id="Sample"
          name="Sample"
        >
          <option
            disabled=""
            value=""
          >
            Choose…
          </option>
          <option
            class="option"
            value="sample"
          >
            Sample
          </option>
        </select>
        <span
          class="error"
        >
          sample error message
        </span>
      </div>
    `)
	})

	it('simulate field change', () => {
		const onSelectionChange = sinon.spy()
		const wrapper = render(
			<Select
				{...defaultProps}
				options={[{ value: 'sample', label: 'Sample' }]}
				onSelectionChange={onSelectionChange}
			/>
		)

		fireEvent.change(wrapper.getByLabelText('Sample field'), {
			target: { value: 'sample' }
		})

		expect(onSelectionChange.called).toBe(true)
	})
})
