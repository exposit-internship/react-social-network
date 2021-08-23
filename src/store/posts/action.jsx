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
    })
    .catch(error => console.log(error))

export const addPost = (post, history) => dispatch =>
  DB.post(`/posts`, post)
    .then(() => {
      dispatch({
        type: `${postsConstance.ADD_POST}`
      })
      history.push(INDEX_ROUTE)
    })
    .catch(error => console.log(error))

export const deletePost = id => dispatch =>
  DB.delete(`/posts/${id}`)
    .then(() => {
      dispatch({
        type: `${postsConstance.DELETE_POST}`
      })
    })
    .catch(error => console.log(error))

// export const getComments = () => {
//   return dispatch => {
//     DB(`posts/comments`).then(({ data }) => {
//       dispatch({
//         type: `${postsConstance.GET_COMMENTS}`
//       })
//       console.log(data)
//     })
//   }
// }

export const addPostComment = id => dispatch =>
  DB(`/posts?id=${id}`)
    .then(() => {
      DB.post('/posts', 'comments').then(() => {
        dispatch({
          type: `${postsConstance.ADD_COMMENT}`
        })
      })
    })
    .catch(error => console.log(error))
