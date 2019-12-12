import React from 'react'
import { render } from '@testing-library/react'
import Txt from '.'

it('renders without crashing', () => {
  const wrapper = render(<Txt>Example text only.</Txt>)
  expect(wrapper.getByText('Example text only.')).toBeInTheDocument()
})
