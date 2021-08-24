import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './app'
import { store, persistor } from './store/store'
import { Provider } from 'react-redux'
import TestState from './context/test/test-state'
import { PersistGate } from 'redux-persist/integration/react'

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
