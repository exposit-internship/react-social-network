import { DB } from '../../core/axios'
import { postsConst } from './type'

export const getPosts = () => {
  return dispatch => {
    DB(`/posts`)
      .then(res => {
        dispatch({
          type: `${postsConst.GET_POSTS}`,
          payload: res.data.reverse()
        })
        console.log(res.data)
      })
      .catch(error => console.log(error))
  }
}

export const addPost = post => {
  return dispatch => {
    DB.post(`/posts`, post)
      .then(() => {
        dispatch({
          type: `${postsConst.ADD_POST}`
        })
      })
      .catch(error => console.log(error))
  }
}

export const deletePost = id => {
  return dispatch => {
    DB.delete(`/posts/${id}`)
      .then(() => {
        dispatch({
          type: `${postsConst.DELETE_POST}`
        })
      })
      .catch(error => console.log(error))
  }
}

// export const getComments = () => {
//   return dispatch => {
//     DB(`posts/comments`).then(({ data }) => {
//       dispatch({
//         type: `${postsConst.GET_COMMENTS}`
//       })
//       console.log(data)
//     })
//   }
// }

// export const addPostComment = comment => {
//   return async dispatch => {
//     DB.post(`posts/comments`).then(() => {
//       dispatch({
//         type: `${postsConst.ADD_POST}`,
//         comment: [
//           {
//             userName: comment.userName,
//             comment
//           }
//         ]
//       })
//       console.log('comment', comment)
//     })
//   }
// }
