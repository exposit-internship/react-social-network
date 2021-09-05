import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

import App from './app'
import ThemeState from './context/theme/theme-state'

import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeState>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </ThemeState>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
