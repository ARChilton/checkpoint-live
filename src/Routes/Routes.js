import React from 'react'
import { Route } from 'react-router'
import EventStatsPage from './EventStatsPage/EventStatsPage'
import HomePage from './HomePage/HomePage'

const Routes = () => (
  <div>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/event-stats" component={EventStatsPage} />
  </div>
)

export default Routes
