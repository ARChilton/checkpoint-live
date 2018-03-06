// react
import React from 'react'
import ReactDOM from 'react-dom'
// routing
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
// onsenui css
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
// redux
import { Provider as ReduxStoreProvider } from 'react-redux'
// redux store
import configureStore from './redux/store'
// service worker
import registerServiceWorker from './registerServiceWorker'
// general imports

import './css/bootstrap.min.css'
import './css/style.css'

// components
import App from './App'


export const history = createHistory()
export const store = configureStore({}, history)

ReactDOM.render(
  <ReduxStoreProvider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </ReduxStoreProvider>,
  document.getElementById('root'),
)
registerServiceWorker()
