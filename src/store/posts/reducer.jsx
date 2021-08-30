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
      console.log('posts', state.posts)
      state = {
        ...state,
        posts: [ ...action.payload, ...state.posts ]
      }
      break
    case postsConstance.DELETE_POST:
      state = {
        ...state,
        posts: action.payload
      }
      break

    case postsConstance.GET_COMMENTS:
      console.log('PAYLOAD', action.payload)
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
