import { postsConstance } from './type'

const initialState = {
  posts: [],
  post: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case postsConstance.GET_POSTS:
      state = {
        ...state,
        posts: action.payload
      }
      break
    case postsConstance.DELETE_POST:
      state = {
        ...state
      }
      break
    case postsConstance.ADD_POST:
      state = {
        ...state
      }
    case postsConstance.GET_COMMENTS:
      state = {
        ...state
      }
      break
    case postsConstance.ADD_COMMENT:
      state = {
        ...state
      }
      break
  }
  return state
}
