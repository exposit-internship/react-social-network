import { INDEX_ROUTE } from '../../constants/routs'
import { DB } from '../../core/axios'
import { postsConstance } from './type'

export const getPosts = () => dispatch =>
  DB(`/posts`)
    .then(res => {
      dispatch({
        type: `${postsConstance.GET_POSTS}`,
        payload: res.data.reverse()
      })
      console.log('POSTS', res.data)
    })
    .catch(error => console.log(error))

export const addPost = post => dispatch =>
  DB.post(`/posts`, post)
    .then(({ data }) => {
      dispatch({
        type: postsConstance.ADD_POST,
        payload: [data]
      })
      console.log('DATAPOST', data)
    })
    .catch(error => console.log(error))

export const deletePost = id => (dispatch, getState) =>
  DB.delete(`/posts/${id}`)
    .then(() => {
      const { posts } = getState().posts
      const filteredPosts = posts.filter(p => p.id !== id)
      dispatch({
        type: `${postsConstance.DELETE_POST}`,
        payload: filteredPosts
      })
    })
    .catch(error => console.log(error))

export const addPostComment = id => dispatch =>
  DB(`/posts?id=${id}`)
    .then(res => {
      dispatch({
        type: postsConstance.ADD_COMMENT,
        payload: res
      })
      console.log('res.data', res, id)
    })
    .catch(error => console.log(error))
