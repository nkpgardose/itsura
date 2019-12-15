import React, { useState } from 'react'

import './../../variables.css'
import './index.css'

export interface FieldChange {
	name: string
	value: string
}

interface Props {
  /**
   * It's based on input disabled attribute.
   */
	disabled?: boolean
  /**
   * It styles field in an error state and display
   * message properly.
   */
	errorMsg?: string
  /**
	 * It generates label HTML element.
   */
	label: string
  /**
   * It's based on input name attribute.
   * Usually used for getting the value of the element.
   */
	name: string
  /**
   * A callback for every key press.
   */
	onFieldChange: (payload: FieldChange) => any
	/**
	 * Additional information supporting label.
	 */
	placeholder?: string
	/**
	 * Based on input required HTML attribute.
	 */
	required?: boolean
	/**
	 * List is long so check input type element html doc.
	 * and include `textarea` as well.
	 */
	type: string
	/**
	 * Based on input value attribute.
	 * Usually used to set initial value of input.
	 */
	value?: string | number
	/**
		* Different style modification by passing.
		* Field's variant or Parent's class elements.
		*/
	variants?: string
}

const Field = ({
	disabled = false,
	errorMsg = "",
	label,
	name,
	onFieldChange,
	placeholder = "",
	required = false,
	type,
	value = '',
	variants = '',
}: Props) => {
	const [val, setFieldVal] = useState(value)
	const classNames = `Field ${errorMsg ? 'error' : ''} ${variants}`
		.replace(/\s+/g, ' ')
		.trim()

	function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
		const { name, value } = e.target
		setFieldVal(value)
		onFieldChange({ name, value })
	}

	function renderInput() {
		switch (type) {
			case 'textarea':
				return (
					<textarea
						className='input'
						disabled={disabled}
						id={name}
						name={name}
						onChange={onChange}
						placeholder={placeholder}
						required={required}
						value={val}
					/>
				)
			default:
				return (
					<input
						className='input'
						disabled={disabled}
						id={name}
						name={name}
						onChange={onChange}
						placeholder={placeholder}
						required={required}
						type={type}
						value={val}
					/>
				)
		}
	}

	return (
		<div className={classNames}>
			<label className="label" htmlFor={name}>{label}</label>
			{renderInput()}
			{errorMsg ? <span className="error">{errorMsg}</span> : null}
		</div>
	)
}

export default Field
