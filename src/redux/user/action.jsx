import { DB } from '../../core/axios'

import { userConstance } from './types'
import { INDEX_ROUTE } from '../../constants/routs'
import { THEME_CHANGE_PAYMENT } from '../../constants/payment'

export const getUser = email => dispatch =>
  DB(`/users?email=${email}`)
    .then(res => {
      dispatch({
        type: userConstance.GET_USER,
        payload: res.data[0]
      })
    })
    .catch(error => console.log(error.message))

export const signUp = (user, email, history) => dispatch =>
  DB(`/users?email=${email}`)
    .then(({ data }) => {
      data.length > 0
        ? alert('This user has already registered')
        : DB.post('/users', user)
            .then(({ data }) => {
              dispatch({
                type: userConstance.USER_LOGIN,
                payload: data
              })
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
          type: userConstance.USER_LOGIN,
          payload: data[0]
        })
        history.push(INDEX_ROUTE)
      } else {
        alert('Please, enter correct password')
      }
    })
    .catch(error => {
      console.log(error.message)
    })

export const logout = () => dispatch => {
  dispatch({
    type: userConstance.USER_LOGOUT
  })
}

export const addUserDeposite =
  ({ email, amount, id, depositeValue, userPassword }) =>
  dispatch =>
    DB(`/users?email=${email}&password=${userPassword}`)
      .then(({ data }) => {
        data.length
          ? DB.patch(`/users/${id}`, { amount: amount + depositeValue })
              .then(res => {
                dispatch({
                  type: userConstance.USER_BALANCE,
                  payload: res.data
                })
              })
              .catch(error => {
                console.log(error.message)
              })
          : alert('Please, enter correct password')
      })
      .catch(error => {
        console.log(error.message)
      })

export const userPaymentConfirm = (id, amount) => dispatch =>
  DB.patch(`/users/${id}`, { amount: amount - THEME_CHANGE_PAYMENT })
    .then(res => {
      dispatch({
        type: userConstance.USER_BALANCE,
        payload: res.data
      })
    })
    .catch(error => {
      console.log(error.message)
    })
