import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import user from './user/reducer'
import posts from './posts/reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'posts']
}

const rootReducer = combineReducers({
  user: user,
  posts: posts
})

export default persistReducer(persistConfig, rootReducer)
