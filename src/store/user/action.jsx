import { DB } from '../../core/axios'

import { userConstance } from './types'
import { INDEX_ROUTE, REGISTER_ROUTE } from '../../constants/routs'

export const getUser = email => dispatch =>
  DB(`/users?email=${email}`).then(res => {
    dispatch({
      type: userConstance.GET_USER,
      payload: res.data[0]
    })
  })

export const signUp = (user, email, history) => dispatch =>
  DB(`/users?email=${email}`)
    .then(({ data }) => {
      data.length > 0
        ? alert('This user is already registered')
        : DB.post('/users', user)
            .then(({ data }) => {
              dispatch({
                type: `${userConstance.USER_LOGIN}`,
                payload: data
              })
              localStorage.setItem('user', JSON.stringify(data))
              history.push(INDEX_ROUTE)
            })
            .catch(error => {
              console.log(error.message)
            })
    })
    .catch(error => {
      console.log(error.message)
    })

export const signIn = (email, password, history) => dispatch =>
  DB(`/users?email=${email}&password=${window.btoa(password)}`)
    .then(({ data }) => {
      if (data.length > 0) {
        dispatch({
          type: `${userConstance.USER_LOGIN}`,
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

export const logout = history => dispatch => {
  localStorage.clear()
  dispatch({
    type: `${userConstance.USER_LOGOUT}`
  })
  history.push(REGISTER_ROUTE)
}

export const addUserDeposite =
  ({ email, amount, id, depositeValue, userPassword }) =>
  dispatch =>
    DB(`/users?email=${email}&password=${userPassword}`)
      .then(async ({ data }) => {
        data.length
          ? DB.patch(`/users/${id}`, { amount: amount + depositeValue })
              .then(res => {
                dispatch({
                  type: userConstance.USER_BALANCE,
                  payload: res.data
                })
                localStorage.setItem('user', JSON.stringify(res.data))
              })
              .catch(error => {
                console.log(error.message)
              })
          : alert('Please, enter correct password')
      })
      .catch(error => {
        console.log(error.message)
      })

export const userPaymentConfirm = (id, amount) => {
  return async dispatch => {
    DB.patch(`/users/${id}`, { amount: amount - 20 }).then(res => {
      console.log('RES', res)
      dispatch({
        type: userConstance.USER_BALANCE,
        payload: res.data
      })
      localStorage.setItem('user', JSON.stringify(res.data))
    })
  }
}
