import { postsConst } from './type'

const initialState = {
  posts: [],
  post: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case `${postsConst.GET_POSTS}`:
      state = {
        ...state,
        posts: action.payload
      }
      break
    case `${postsConst.DELETE_POST}`:
      state = {
        ...state
      }
      break
    case `${postsConst.ADD_POST}`:
      state = {
        ...state
      }
    case ` ${postsConst.GET_COMMENTS}`:
      state = {
        ...state
      }
      break
    case ` ${postsConst.ADD_COMMENT}`:
      state = {
        ...state,
       
      }
      break
  }
  return state
}
