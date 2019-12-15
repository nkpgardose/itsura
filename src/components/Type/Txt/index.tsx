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


const Txt = ({
	children,
	variants = ''
}: Props) => {
	const classNames = `Txt ${variants}`.trim()
	return <p className={classNames}>{children}</p>
}

export default Txt
