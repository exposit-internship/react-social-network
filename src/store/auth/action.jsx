import axios from 'axios'

import { DB } from '../../core/axios'

import { authConst } from './types'
import { INDEX_ROUTE } from '../../constants/routs'

export const signUp = (user, email, history) => {
  return async dispatch => {
    DB(`/users?email=${email}`)
      .then(({ data }) => {
        if (data.length > 0) {
          alert('This user is already registered')
        } else {
          DB.post('/users', user)
            .then(({ data: loggedInUser }) => {
              localStorage.setItem('user', JSON.stringify(loggedInUser))

              dispatch({
                type: `${authConst.USER_LOGIN}`
              })
              history.push(INDEX_ROUTE)
            })
            .catch(error => {
              console.log(error.message)
            })
        }
      })
      .catch(error => {
        console.log(error.message)
      })
  }
}

export const signIn = (email, password, history) => {
  return async dispatch => {
    DB(`/users?email=${email}&password=${window.btoa(password)}`)
      .then(({ data }) => {
        console.log(data)
        if (data.length > 0) {
          dispatch({
            type: `${authConst.USER_LOGIN}`
          })
          history.push(INDEX_ROUTE)
        } else {
          alert('incorrect data')
        }
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
