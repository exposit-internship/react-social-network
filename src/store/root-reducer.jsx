import { combineReducers } from "redux";
import user from './user/reducer';
import posts from './posts/reducer';

const rootReducer = combineReducers({
  user: user,
  posts: posts
})

export default rootReducer;