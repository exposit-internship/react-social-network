import { authConst } from './types'

const initialState = {
  users: [],
  user: {},
  authenticated: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case `${authConst.USER_LOGIN}`:
      state = {
        ...state,
        authenticated: true
      }
      console.log({ ...state })
      break
    case `${authConst.USER_LOGOUT}`:
      state = {
        ...state,
        authenticated: false
      }
      break
  }
  return state
}
