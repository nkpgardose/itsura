import React from 'react'

import './../../../variables.css'
import './index.css'

interface Props {
  /**
   * Set of texts or texts with inline elements.
   */
	children: React.ReactNode
  /**
   * Different style modification by passing
   * Type's variant or Parent's class elements.
   */
	variants?: string
}

const defaultProps = { variants: '' }

/**
 * Using project's default font family with set of variants.
 * Mostly used for paragraphs.
 */
const Txt = ({ children, variants }: Props) => {
	const classNames = `Txt ${variants}`.trim()
	return <p className={classNames}>{children}</p>
}

Txt.defaultProps = defaultProps

export default Txt
