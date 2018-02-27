import React from 'react'
import renderer from 'react-test-renderer'
import Th from './Th'


it('renders 5 table heads', () => {
  const headers = ['a', 'b', 'c', 'd', 'e']
  const tree = renderer
    .create(Th({ props: { headers } })).toJSON()

  expect(tree).toMatchSnapshot()
})
