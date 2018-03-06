import React from 'react'
import { Route } from 'react-router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Splitter, SplitterContent, SplitterSide } from 'react-onsenui'

import { getSideMenuState, getSideMenuItems } from '../redux/reducers'

import { toggleSideMenu } from './SplitterState'
import MenuPage from './MenuPage/MenuPage'
import HomePage from './HomePage/HomePage'
import EventStatsPage from './EventStatsPage/EventStatsPage'


const Routes = ({
  menuIsOpen, onClose, onOpen, menuItems,
}) => (
  <div>
    <Splitter>
      <SplitterSide
        id="menu"
        isOpen={menuIsOpen}
        onOpen={onOpen}
        onClose={onClose}
        side="left"
        swipe-target-width="1px"
        collapse
      >
        <MenuPage menuItems={menuItems} />
      </SplitterSide>
      <SplitterContent>
        {/* <MyNavigator /> */}
        <Route exact path="/" component={HomePage} />
      </SplitterContent>
    </Splitter>
    <Route exact path="/" component={HomePage} />
    <Route path="/event-stats" component={EventStatsPage} />

  </div >
)

Routes.propTypes = {
  menuIsOpen: PropTypes.bool,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.string),
}

Routes.defaultProps = {
  menuIsOpen: false,
  menuItems: [],
}

const mapStateToProps = (state) => {
  console.log(getSideMenuState(state))
  return {
    menuIsOpen: getSideMenuState(state),
    menuItems: getSideMenuItems(state),
  }
}

const mapDispatchToProps = dispatch => ({
  onClose: dispatch(toggleSideMenu(false)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
