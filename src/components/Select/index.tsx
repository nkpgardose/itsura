/* eslint-disable jsx-a11y/no-onchange */
import React, { useState } from 'react'
import { FieldChange } from './../Field'

import '../../variables.css'
import './../Field/index.css'
import './index.css'

interface Options {
	label: string
	value: string
}

interface Props {
	/**
	 * It's based on input disabled attribute.
	 */
	disabled?: boolean,
  /**
   * It styles field in an error state and display
   * message properly.
   */
	errorMsg?: string,
  /**
	 * It generates label HTML element.
   */
	label?: string,
  /**
   * It's based on input name attribute.
   * Usually used for getting the value of the element.
   */
	name: string,
  /**
   * A callback every selection changes.
   */
	onSelectionChange: (payload: FieldChange) => any
  /**
   * List of items for Select.
   */
	options: Array<Options>
	/**
	 * Based on input required HTML attribute.
	 */
	required?: boolean,
	/**
	 * Based on input value attribute.
	 * Usually used to set initial value of input.
	 */
	value?: string | number
	/**
		* Different style modification by passing.
		* Select's variant or Parent's class elements.
		*/
	variants?: string,
}

function Select({
	disabled = false,
	errorMsg = '',
	label = '',
	name,
	onSelectionChange,
	options,
	required = false,
	value = '',
	variants = '',
}: Props) {
	const [val, setFieldVal] = useState(value)
	const classNames = `
    Field Select ${errorMsg ? 'error' : ''} ${variants}
  `.replace(/\s+/g, ' ').trim()

	function onChange(e: React.ChangeEvent<HTMLSelectElement>): void {
		const { name, value } = e.target
		setFieldVal(value)
		onSelectionChange({ name, value })
	}

	return (
		<div className={classNames}>
			{label ?
				(<label className='label' htmlFor={name}>{label}</label>) :
				null
			}
			<select
				className='input'
				name={name}
				id={name}
				value={val}
				required={required}
				disabled={disabled}
				onChange={onChange}
			>
				<option disabled value=''>Choose&hellip;</option>
				{options.map(option => {
					return (
						<option
							key={option.value}
							className='option'
							value={option.value}
						>
							{option.label}
						</option>
					)
				})}
			</select>
			{errorMsg ? <span className='error'>{errorMsg}</span> : null}
		</div>
	)
}

export default Select
