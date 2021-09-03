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
    .catch(error => console.log(error))

export const addPost = post => dispatch =>
  DB.post(`/posts`, post)
    .then(({ data }) => {
      dispatch({
        type: postsConstance.ADD_POST,
        payload: [data]
      })
    })
    .catch(error => console.log(error))

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
    .catch(error => console.log(error))

export const addPostComment = (id, comment, comments) => dispatch =>
  DB(`/posts/${id}`)
    .then(({ data }) => {
      console.log("DATA1",data)
      DB.patch(`posts/${id}`, comments ).then(res => {
        dispatch({
          type: postsConstance.ADD_COMMENT,
          payload: res.data.comments
        })
        console.log('RES', res.data.comments)
      })
      // DB.patch(`posts/${id}`, {
      //   comments: [{ ...comment, userName, userComment }]
      // }).then(() => {

      console.log('data', data)
      //   })
    })
    .catch(error => console.log(error))
