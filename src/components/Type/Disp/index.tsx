import React, { ReactNode } from 'react'

import './../../../variables.css'
import './index.css'

interface Props {
  /**
   * Main message that will inspire some people
   * or marketing message.
   */
	title: string | ReactNode
  /**
   * Follow up or more content behind title.
   */
	subtitle?: string | ReactNode
  /**
   * Different style modification by passing
   * Heading's variant or Parent's class elements.
   */
	variants?: string
}

/**
 * Disp is use for expressing some
 * motivational texts or some
 * obvious feature of the app.
 * Text here are **HUGE**
 */
const Disp = ({
	title,
	subtitle = '',
	variants = ''
}: Props) => {
	const classNames = `Disp ${variants}`.trim()

	return (
		<section className={classNames}>
			<h1 className="title">{title}</h1>
			<p className="subtitle">{subtitle}</p>
		</section>
	)
}

export default Disp
