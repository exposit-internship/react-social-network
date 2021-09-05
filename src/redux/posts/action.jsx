import { DB } from '../../core/axios'
import { postsConstance } from './type'

export const getPosts = () => dispatch =>
  DB(`/posts`)
    .then(res => {
      dispatch({
        type: postsConstance.GET_POSTS,
        payload: res.data.reverse()
      })
    })
    .catch(error => console.log(error.message))

export const addPost = post => dispatch =>
  DB.post(`/posts`, post)
    .then(({ data }) => {
      dispatch({
        type: postsConstance.ADD_POST,
        payload: [data]
      })
    })
    .catch(error => console.log(error.message))

export const deletePost = id => (dispatch, getState) =>
  DB.delete(`/posts/${id}`)
    .then(() => {
      const { posts } = getState().posts
      const filteredPosts = posts.filter(p => p.id !== id)
      dispatch({
        type: postsConstance.DELETE_POST,
        payload: filteredPosts
      })
    })
    .catch(error => console.log(error.message))

export const addPostComment = (id, comments) => dispatch =>
  DB.patch(`posts/${id}`, comments)
    .then(res => {
      dispatch({
        type: postsConstance.ADD_COMMENT,
        payload: { comments: res.data.comments, id }
      })
    })
    .catch(error => console.log(error.message))
