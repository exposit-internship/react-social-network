import axios from 'axios'
import { postsConst } from './type'

export const getPosts = () => {
  return dispatch => {
    axios
      .get(`${process.env.REACT_APP_LOCALHOST_5000}/posts`)
      .then(res => {
        console.log('res', res.data)
        dispatch({
          type: `${postsConst.GET_POSTS}`,
          payload: res.data
        })
      })
      .catch(error => console.log(error))
  }
}

export const addPost = post => {
  return dispatch => {
    axios
      .post(`${process.env.REACT_APP_LOCALHOST_5000}/posts`, post)
      .then(res => {
        console.log('post', res.data)
        dispatch({
          type: `${postsConst.ADD_POST}`
        })
        // dispatch({
        //   type: `${postsConst.GET_POSTS}`,
        //   payload: res.data
        // })
        console.log('post', res.data)
      })
      .catch(error => console.log(error))
  }
}

export const deletePost = id => {
  return dispatch => {
    axios
      .delete(`${process.env.REACT_APP_LOCALHOST_5000}/posts/${id}`)
      .then(res => {
        console.log('delete', res)
        dispatch({
          type: `${postsConst.DELETE_POST}`
        })
        // dispatch({
        //   type: `${postsConst.GET_POSTS}`,
        //   payload: res.data
        // })
        console.log('delete', res.data)
      })
      .catch(error => console.log(error))
  }
}
