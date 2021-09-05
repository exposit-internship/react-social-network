import { postsConstance } from './type'

const initialState = {
  posts: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case postsConstance.GET_POSTS:
      return {
        ...state,
        posts: action.payload
      }

    case postsConstance.ADD_POST:
      return {
        ...state,
        posts: [...action.payload, ...state.posts]
      }

    case postsConstance.DELETE_POST:
      return {
        ...state,
        posts: action.payload
      }

    case postsConstance.ADD_COMMENT:
      const newPosts = [...state.posts]
      const post = newPosts.find(elem => elem.id === action.payload.id)
      post.comments = action.payload.comments

      return {
        ...state,
        posts: newPosts
      }

    default:
      return state
  }
}
