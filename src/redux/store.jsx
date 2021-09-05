import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'

import rootReducer from './root-reducer'

const middleware = [thunk]

process.env.NODE_ENV === 'development' && middleware.push(logger)

export const store = createStore(rootReducer, applyMiddleware(...middleware))
export const persistor = persistStore(store)

export default { store, persistor }
