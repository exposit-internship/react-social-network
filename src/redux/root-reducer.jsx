import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import user from './user/reducer'
import posts from './posts/reducer'
import shows from './shows/reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'posts', 'shows']
}

const rootReducer = combineReducers({
  user: user,
  posts: posts,
  shows: shows
})

export default persistReducer(persistConfig, rootReducer)
