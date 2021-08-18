import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './app'
import store from './store/store'
import { Provider } from 'react-redux'
import TestState from './context/test/test-state'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TestState>
        <App />
      </TestState>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
