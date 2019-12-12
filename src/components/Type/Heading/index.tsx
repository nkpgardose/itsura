import React from 'react'

import './../../../variables.css'
import './index.css'

interface Props {
  /**
   * Set of texts or texts with inline elements.
   */
  children: React.ReactNode
  /**
   * From 1 being the most important, 6 is the least.
   * 1 by default.
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6
  /**
   * Different style modification by passing
   * Heading's variant or Parent's class elements.
   * "" by default.
   */
  variants?: string
}

const defaultProps = {
  level: 1,
  variants: ''
}

/**
 * Headings are to mark and separate
 * a certain information on a page.
 * Good for SEO purposes.
 */
const Heading = ({ children, level, variants }: Props) => {
  const classNames = `Heading ${variants}`.trim()
  switch (level) {
    case 2:
      return <h2 className={classNames}>{children}</h2>
    case 3:
      return <h3 className={classNames}>{children}</h3>
    case 4:
      return <h4 className={classNames}>{children}</h4>
    case 5:
      return <h5 className={classNames}>{children}</h5>
    case 6:
      return <h6 className={classNames}>{children}</h6>
    case 1:
    default:
      return <h1 className={classNames}>{children}</h1>
  }
}

Heading.defaultProps = defaultProps

export default Heading
