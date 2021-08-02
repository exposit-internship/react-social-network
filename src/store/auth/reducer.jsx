import { authConst } from './types'

const initialState = {
  firstName: '',
  secondName: '',
  email: '',
  password: '',
  authenticating: false,
  authenticated: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case `${authConst.USER_LOGIN}_REQUEST`:
      state = {
        ...state,
        authenticating: true
      }
      console.log(state)
      console.log('ACTION IN REQUEST')
      break
    case `${authConst.USER_LOGIN}_SUCCESS`:
      state = {
        ...state,
        authenticating: false,
        authenticated: true
      }
      console.log(state)
      console.log('ACTION SUCCESS')
      break
    case `${authConst.USER_LOGIN}_FAILURE`:
      console.log(state)
      console.log('THIS IS AN ERROR')
      state = {
        ...state,
        authenticating: false,
        authenticated: false,
        error: true
      }
      break
    case `${authConst.USER_LOGOUT}_REQUEST`:
      state = {
        ...state
      }
      console.log('LOGOUT REQUEST, IN PROCESS...')
      break
    case `${authConst.USER_LOGOUT}_SUCCESS`:
      state = {
        ...state,
        authenticated: false
      }
      console.log('LOGOUT SUCCESS')
      break
    case `${authConst.USER_LOGOUT}_REQUEST`:
      state = {
        ...state
      }
      break
  }
  return state
}
