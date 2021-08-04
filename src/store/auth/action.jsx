import axios from 'axios'
import { authConst } from './types'

export const signUp = user => {
  return async dispatch => {
    dispatch({
      type: `${authConst.USER_LOGIN}_REQUEST`
    })

    const db = `${process.env.REACT_APP_LOCALHOST_5000}/user`
    axios
      // .get(db)
      // .then(({ data }) => {
      //   data.filter(({ email, password } = user) => {
      //     console.log({email, password})
      //   })
      // })
      .post(db, user)
      .then(({ data: loggedInUser }) => {
        localStorage.setItem('user', JSON.stringify(loggedInUser))

        console.log('data', { loggedInUser })
        console.log('user', user.email)

        dispatch({
          type: `${authConst.USER_LOGIN}_SUCCESS`
        })
      })
      .catch(error => {
        console.log(error.message)
        dispatch({
          type: `${authConst.USER_LOGIN}_FAILURE`
        })
      })
  }
}

export const signIn = user => {
  return async dispatch => {
    dispatch({
      type: `${authConst.USER_LOGIN}_REQUEST`
    })
    const db = `${process.env.REACT_APP_LOCALHOST_5000}/user`
    axios
      .get(db)
      .then(() => {
        const loggedInUser = {
          email: user.email,
          password: user.password
        }
        localStorage.setItem('user', JSON.stringify(loggedInUser))

        dispatch({
          type: `${authConst.USER_LOGIN}_SUCCESS`
        })
      })
      .catch(error => {
        dispatch({
          type: `${authConst.USER_LOGIN}_FAILURE`
        })
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
        type: `${authConst.USER_LOGIN}_SUCCESS`
      })
    } else {
      dispatch({
        type: `${authConst.USER_LOGIN}_FAILURE`
      })
    }
  }
}

export const logout = () => {
  return async dispatch => {
    dispatch({
      type: `${authConst.USER_LOGOUT}_REQUEST`
    })

    localStorage.clear()

    dispatch({
      type: `${authConst.USER_LOGOUT}_SUCCESS`
    })
    dispatch({
      type: `${authConst.USER_LOGOUT}_FAILURE`
    })
  }
}
