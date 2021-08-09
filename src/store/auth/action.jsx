import axios from 'axios'
import { authConst } from './types'

export const signUp = user => {
  return async dispatch => {
    const db = `${process.env.REACT_APP_LOCALHOST_5000}/users`
    axios
      .post(db, user)
      .then(({ data: loggedInUser }) => {
        localStorage.setItem('user', JSON.stringify(loggedInUser))

        dispatch({
          type: `${authConst.USER_LOGIN}`
        })
      })
      .catch(error => {
        console.log(error.message)
      })
  }
}

export const signIn = user => {
  return async dispatch => {
    const db = `${process.env.REACT_APP_LOCALHOST_5000}/users`
    axios
      .get(db)
      .then(() => {
        const loggedInUser = {
          email: user.email,
          password: user.password
        }
        localStorage.setItem('user', JSON.stringify(loggedInUser))

        dispatch({
          type: `${authConst.USER_LOGIN}`
        })
      })
      .catch(error => {
        console.log(error.message)
      })
  }
}

export const isLoggedInUser = () => {
  return async dispatch => {
    const user = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : null

    if (user) {
      dispatch({
        type: `${authConst.USER_LOGIN}`
      })
    } else {
      dispatch({
        type: `${authConst.USER_LOGOUT}`
      })
    }
  }
}

export const logout = () => {
  return async dispatch => {
    localStorage.clear()

    dispatch({
      type: `${authConst.USER_LOGOUT}`
    })
  }
}
