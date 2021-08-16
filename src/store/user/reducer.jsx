import { userConst } from './types'

const initialState = {
  users: [],
  user: {},
  authenticated: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case `${userConst.USER_LOGIN}`:
      state = {
        ...state,
        user: action.payload,
        authenticated: true
      }
      break
    case `${userConst.USER_LOGOUT}`:
      state = {
        ...state,
        authenticated: false
      }
      break
    case `${userConst.USER_BALANCE}`:
      state = {
        ...state,
        user: action.payload
      }
      break
  }

  return state
}
