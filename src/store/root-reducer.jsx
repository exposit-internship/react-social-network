import { combineReducers } from "redux";
import auth from './auth/reducer';
import posts from './posts/reducer';

const rootReducer = combineReducers({
  auth: auth,
  posts: posts
})

export default rootReducer;