import React from 'react'
import PropTypes from 'prop-types'
import { Toolbar as OnsToolbar } from 'react-onsenui'

const Toolbar = ({
  backButton, menuButton, title, lastSyncTime,
}) => (
  <OnsToolbar>
    <div className="left" />
    <div className="center" />
    <div className="right" />
  </OnsToolbar>
)

Toolbar.propTypes = {
  backButton: PropTypes.bool.isRequired,
  menuButton: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  lastSyncTime: PropTypes.string,
}

Toolbar.defaultProps = {
  lastSyncTime: null,
}

export default Toolbar
