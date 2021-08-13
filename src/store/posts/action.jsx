import axios from 'axios'
import { postsConst } from './type'

export const getPosts = () => {
  return dispatch => {
    axios
      .get(`${process.env.REACT_APP_LOCALHOST_5000}/posts`)
      .then(res => {
        dispatch({
          type: `${postsConst.GET_POSTS}`,
          payload: res.data.reverse()
        })
      })
      .catch(error => console.log(error))
  }
}

export const addPost = post => {
  return dispatch => {
    axios
      .post(`${process.env.REACT_APP_LOCALHOST_5000}/posts`, post)
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
    axios
      .delete(`${process.env.REACT_APP_LOCALHOST_5000}/posts/${id}`)
      .then(() => {
        dispatch({
          type: `${postsConst.DELETE_POST}`
        })
      })
      .catch(error => console.log(error))
  }
}
