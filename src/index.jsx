import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

import App from './app'
import TestState from './context/test/test-state'

import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TestState>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </TestState>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
