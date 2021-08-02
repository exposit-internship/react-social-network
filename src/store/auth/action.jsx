import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { authConst } from './types'

export const signUp = user => {
  return async dispatch => {
    dispatch({
      type: `${authConst.USER_LOGIN}_REQUEST`
    })

    const db = `http://localhost:3005/user`
    axios
      .post(db, {
        firstName: user.firstName,
        secondName: user.secondName,
        email: user.email,
        password: user.password,
        id: user.id
      })
      .then(({ data }) => {
        const loggedInUser = {
          firstName: user.firstName,
          secondName: user.secondName,
          email: user.email,
          password: user.password,
          id: data.id
        }
        localStorage.setItem('user', JSON.stringify(loggedInUser))
        console.log(loggedInUser)
        console.log(data)

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
    const db = 'http://localhost:3005/user'
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
    const isLoggedUser = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : null

    if (isLoggedUser) {
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

// export const logout = id => {
//   dispatch => {
//     dispatch({
//       type: `${authConst.USER_LOGOUT}_REQUEST`
//     })
//   }
// }
