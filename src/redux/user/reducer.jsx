import { userConstance } from './types'

const initialState = {
  users: [],
  user: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case userConstance.GET_USER:
      state = {
        ...state,
        user: action.payload
      }
      break
    case userConstance.USER_LOGIN:
      state = {
        ...state,
        user: action.payload
      }
      break
    case userConstance.USER_LOGOUT:
      //
      state = {
        ...state,
        ...initialState
      }
      break
    case userConstance.USER_BALANCE:
      state = {
        ...state,
        user: {
          ...state.user,
          amount: action.payload.amount
        }
      }
      break
  }

  return state
}
