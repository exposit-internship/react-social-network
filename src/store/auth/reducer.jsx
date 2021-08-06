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
      console.log('ACTION IN REQUEST')
      break
    case `${authConst.USER_LOGIN}_SUCCESS`:
      state = {
        ...state,
        authenticating: false,
        authenticated: true
      }
      console.log('ACTION SUCCESS')
      break
    case `${authConst.USER_LOGIN}_FAILURE`:
      state = {
        ...state,
        authenticating: false,
        authenticated: false,
        error: true
      }
      console.log('THIS IS AN ERROR')
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
  }
  return state
}
