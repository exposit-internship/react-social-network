import { DB } from '../../core/axios'

import { userConst } from './types'
import { INDEX_ROUTE } from '../../constants/routs'

export const signUp = (user, email, history) => {
  return async dispatch => {
    DB(`/users?email=${email}`)
      .then(({ data }) => {
        if (data.length > 0) {
          alert('This user is already registered')
        } else {
          DB.post('/users', user)
            .then(({ data }) => {
              dispatch({
                type: `${userConst.USER_LOGIN}`,
                payload: data
              })
              localStorage.setItem('user', JSON.stringify(data))

              console.log('data', data)
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
            type: `${userConst.USER_LOGIN}`,
            payload: data[0]
          })
          localStorage.setItem('user', JSON.stringify(data[0]))
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

export const isLoggedInUser = user => {
  return async dispatch => {
    const user = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : null

    if (user) {
      dispatch({
        type: `${userConst.USER_LOGIN}`
      })
    } else {
      dispatch({
        type: `${userConst.USER_LOGOUT}`
      })
    }
  }
}

export const logout = () => {
  return async dispatch => {
    localStorage.clear()

    dispatch({
      type: `${userConst.USER_LOGOUT}`
    })
  }
}

export const addUserDeposite = (email, password, amount, id) => {
  return async dispatch => {
    DB(`/users?email=${email}&password=${window.btoa(password)}`)
      .then(({ data }) => {
        if (data.length < 1) {
          alert('Please, enter correct password')
        } else {
          DB.put(`/user/${id}`)
            .then(() => {
              console.log('addUserDeposite', data)
              dispatch({
                type: `${userConst.USER_BALANCE}`,
                payload: data[0]
              })
              console.log('addUserDeposite', data)
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
