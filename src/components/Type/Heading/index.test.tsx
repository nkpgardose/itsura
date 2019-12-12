import React from 'react'
import { render } from '@testing-library/react'
import Heading from '.'

describe('Heading', () => {
	it('renders without crashing', () => {
		const wrapper = render(<Heading>Hello World</Heading>)
		expect(wrapper.getByText('Hello World')).toBeInTheDocument()
	})

	it('returns right heading', () => {
		const { container: wrapper } = render(<Heading>Hello World</Heading>)
		expect(wrapper.firstChild).toMatchInlineSnapshot(`
      <h1
        class="Heading"
      >
        Hello World
      </h1>
    `)

		const { container: anotherWrapper } = render(
			<Heading level={4}>Hello World</Heading>
		)
		expect(anotherWrapper.firstChild).toMatchInlineSnapshot(`
      <h4
        class="Heading"
      >
        Hello World
      </h4>
    `)

		const { container: headingCaseTwo } = render(
			<Heading level={2}>Hello World</Heading>
		)
		expect(headingCaseTwo.firstChild).toMatchInlineSnapshot(`
      <h2
        class="Heading"
      >
        Hello World
      </h2>
    `)

		const { container: headingCaseThree } = render(
			<Heading level={3}>Hello World</Heading>
		)
		expect(headingCaseThree.firstChild).toMatchInlineSnapshot(`
      <h3
        class="Heading"
      >
        Hello World
      </h3>
    `)

		const { container: headingCaseFive } = render(
			<Heading level={5}>Hello World</Heading>
		)
		expect(headingCaseFive.firstChild).toMatchInlineSnapshot(`
      <h5
        class="Heading"
      >
        Hello World
      </h5>
    `)

		const { container: headingCaseLast } = render(
			<Heading level={6}>Hello World</Heading>
		)
		expect(headingCaseLast.firstChild).toMatchInlineSnapshot(`
      <h6
        class="Heading"
      >
        Hello World
      </h6>
    `)
	})

	it('returns heading with variants', () => {
		const { container: wrapper } = render(
			<Heading variants="light">Hello World</Heading>
		)
		expect(wrapper.firstChild).toHaveClass('Heading light')
	})
})
