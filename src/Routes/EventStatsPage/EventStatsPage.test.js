import React from 'react'
import ReactDOM from 'react-dom'
import EventStatsPage from './EventStatsPage'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<EventStatsPage />, div)
  ReactDOM.unmountComponentAtNode(div)
})
