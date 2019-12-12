import React, { useState } from 'react'

import './../../variables.css'
import './index.css'

interface FieldChange {
	name: string
	value: string
}

interface Props {
  /**
   * Based on input disabled attribute.
   * It would not accept texts.
   * `false` by default.
   */
	disabled?: boolean
  /**
   * Styled field in an error state and display
   * message given properly.
   * "" by default.
   */
	errorMsg?: string
  /**
   * To indicate the field responsiblity.
   */
	label: string
  /**
   * Based on input name attribute.
   * Usually used for getting the
   * value of the element.
   */
	name: string
  /**
   * Callback every key press
   */
	onFieldChange: (payload: FieldChange) => any
	/**
	 * Additional information supporting label.
	 * "" by default.
	 */
	placeholder?: string
	/**
	 * Based on input required attribute.
	 * `false` by default.
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
	 * "" by default.
	 */
	value?: string | number
	/**
		* Different style modification by passing
		* Field's variant or Parent's class elements.
		* "" by default.
		*/
	variants?: string
}

const defaultProps = {
	disabled: false,
	errorMsg: '',
	placeholder: '',
	required: false,
	value: '',
	variants: '',
}

const Field = ({
	disabled,
	errorMsg,
	label,
	name,
	onFieldChange,
	placeholder,
	required,
	type,
	value,
	variants,
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

Field.defaultProps = defaultProps

export default Field
