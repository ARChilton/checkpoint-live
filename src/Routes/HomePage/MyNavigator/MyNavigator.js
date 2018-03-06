import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { RouterNavigator } from 'react-onsenui'
import { getRouteConfig } from '../../../redux/reducers'
import { postPop as postPopActionCreator, postPush as postPushActionCreator } from './MyNavigatorState'

const debug = require('debug')('checkpointLive-MyNavigator')

const MyNavigator = ({ routeConfig, postPush, postPop }) => {
  const renderPage = (route) => {
    const props = route.props || {}
    debug(route)
    return <route.component {...props} />
  }

  return (
    <RouterNavigator
      routeConfig={routeConfig}
      renderPage={renderPage(routeConfig)}
      onPostPush={postPush}
      onPostPop={postPop}
    />
  )
}

MyNavigator.propTypes = {
  routeConfig: PropTypes.objectOf(PropTypes.object).isRequired,
  postPop: PropTypes.func.isRequired,
  postPush: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  routeConfig: getRouteConfig(state),
})

const mapDispatchToProps = dispatch => ({
  postPush: dispatch(postPopActionCreator()),
  postPop: dispatch(postPushActionCreator()),
  // postPush,
  // postPop,
})

export default connect(mapStateToProps, mapDispatchToProps)(MyNavigator)
