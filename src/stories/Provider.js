import React from 'react'
import PropTypes from 'prop-types'
import { Provider as ReduxProvider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import configureStore from '../redux/store'

const history = createHistory()
const store = configureStore({}, history)

const Provider = ({ story }) => (
  <ReduxProvider store={store}>
    {story}
  </ReduxProvider>
)

Provider.propTypes = {
  story: PropTypes.func.isRequired,
}
export default Provider
