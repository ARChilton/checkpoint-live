import React from 'react'
import renderer from 'react-test-renderer'

import MenuPage from './MenuPage'

it('renders correctly', () => {
  const tree = renderer.create(<MenuPage id="operationFounderMenu" menuItems={['adam', 'bob', 'kat']} />).toJSON()
  expect(tree).toMatchSnapshot()
})
