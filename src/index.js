import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxStoreProvider } from 'react-redux'
import './css/bootstrap.min.css'
import './css/index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './redux/store'

const store = configureStore()

ReactDOM.render(
  <ReduxStoreProvider store={store}>
    <App />
  </ReduxStoreProvider>,
  document.getElementById('root'),
)
registerServiceWorker()
