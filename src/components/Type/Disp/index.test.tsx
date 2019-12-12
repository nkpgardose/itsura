import React from 'react'
import { render } from '@testing-library/react'
import Disp from '.'

describe('Disp', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Disp title="Hello world!" subtitle="specially earth!" />
    )
    expect(container).toMatchInlineSnapshot(`
      <div>
        <section
          class="Disp"
        >
          <h1
            class="title"
          >
            Hello world!
          </h1>
          <p
            class="subtitle"
          >
            specially earth!
          </p>
        </section>
      </div>
    `)
  })
})
