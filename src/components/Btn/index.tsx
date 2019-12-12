import React from 'react'

import './../../variables.css'
import './index.css'

interface Props {
  /**
    * Different style modification by passing
    * Btn's variant or Parent's class elements.
    * "" by default.
    */
	variants?: string
  /**
   * By default is medium. Blank size is a medium size.
   */
	size?: '' | 'xsm' | 'sm' | 'lg' | 'xlg'
  /**
   * Usage depends on elements structure or scenario.
   * By default it is `submit`.
   */
	type?: 'button' | 'submit' | 'reset'
  /**
   * Callback when button is clicked.
   * It will return `element` as param.
   */
	onClick?: React.MouseEventHandler<Element>
  /**
   * Inside of an button.
   */
	children: React.ReactNode
  /**
   * Makes button unclickable if disabled was enabled. lol.
   * default is `false`.
   */
	disabled?: boolean
}

const defaultProps = {
	disabled: false,
	type: 'submit',
	size: '',
	variants: '',
	onClick() { }
}

const Btn = ({ variants, size, children, onClick, disabled, type }: Props) => {
	const classNames = `Btn ${size} ${variants}`.replace(/\s+/g, ' ').trim()
	return <button
		className={classNames}
		type={type}
		onClick={onClick}
		disabled={disabled}>
		{children}
	</button>
}

Btn.defaultProps = defaultProps

export default Btn
