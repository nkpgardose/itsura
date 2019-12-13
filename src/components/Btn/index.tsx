import * as React from 'react'

import './../../variables.css'
import './index.css'

interface Props {
  /**
    * Different style modification by passing
    * Btn's variant or Parent's class elements.
    */
	variants?: string
  /**
   * Size by default is medium. Blank size is a medium size.
   */
	size?: '' | 'xsm' | 'sm' | 'lg' | 'xlg'
  /**
   * The usage depends on elements structure or scenario.
   */
	type?: 'button' | 'submit' | 'reset'
  /**
   * A callback when button is clicked.
	 * This will pass an React mouse event.
   */
	onClick?: React.MouseEventHandler<Element>
  /**
   * Any string or HTML element placed inside Btn
   */
	children: React.ReactNode | string
  /**
   * It makes button unclickable if the disabled attribute is active.
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
	return (
		<button
			className={classNames}
			type={type}
			onClick={onClick}
			disabled={disabled}>
			{children}
		</button>
	)
}

Btn.defaultProps = defaultProps

export default Btn
