import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
// import ons from 'onsenui'
import { Splitter, SplitterSide, SplitterContent } from 'react-onsenui'
import { getSideMenuState } from './HomePageState'

const HomePage = ({ menuIsOpen, onClose, onOpen }) => (
  <div>
    <Helmet
      title="hoooome"
    />
    Home page
    <Splitter>
      <SplitterSide isOpen={menuIsOpen} onOpen={onOpen} onClose={onClose}>Menu</SplitterSide>
      <SplitterContent />
    </Splitter>
  </div>
)

HomePage.propTypes = {
  menuIsOpen: PropTypes.bool,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

HomePage.defaultProps = {
  menuIsOpen: false,
}

const mapStateToProps = state => ({
  menuIsOpen: getSideMenuState(state),
})
export default connect(mapStateToProps)(HomePage)
