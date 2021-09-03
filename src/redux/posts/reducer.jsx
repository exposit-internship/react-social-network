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
    case postsConstance.ADD_POST:
      state = {
        ...state,
        posts: [...action.payload, ...state.posts]
      }
      break
    case postsConstance.DELETE_POST:
      state = {
        ...state,
        posts: action.payload
      }
      break

    case postsConstance.ADD_COMMENT:
      state = {
        ...state,
        posts: {
          ...state.posts,
          comments: action.payload.comments
        }

      }
      break
  }
  return state
}
