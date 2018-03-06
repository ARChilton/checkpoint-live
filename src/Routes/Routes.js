import React from 'react'
import { Route, withRouter } from 'react-router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Splitter, SplitterContent, SplitterSide } from 'react-onsenui'
import { getSideMenuState, getSideMenuItems } from '../redux/reducers'
import { toggleSideMenu } from './splitterState'
import MenuPage from './MenuPage/MenuPage'
import HomePage from './HomePage/HomePage'
import EventStatsPage from './EventStatsPage/EventStatsPage'
import SignUpPage from './SignUpPage/SignUpPage'


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
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route exact path="/" component={HomePage} />
        <Route path="/event-stats" component={EventStatsPage} />
        <Route path="/sign-up" component={SignUpPage} />
      </SplitterContent>
    </Splitter>


  </div >
)

Routes.propTypes = {
  menuIsOpen: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.string),
}

Routes.defaultProps = {
  menuIsOpen: false,
  menuItems: [],
  onOpen: null,
}

const mapStateToProps = state => ({
  menuIsOpen: getSideMenuState(state),
  menuItems: getSideMenuItems(state),
})

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(toggleSideMenu(false)),
  // onOpen: () => dispatch(toggleSideMenu(true)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes))
