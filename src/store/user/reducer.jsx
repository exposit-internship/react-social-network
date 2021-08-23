import { userConstance } from './types'

const initialState = {
  users: [],
  user: {},
  authenticated: false
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
        user: action.payload,
        authenticated: true
      }
      break
    case userConstance.USER_LOGOUT:
      state = {
        ...state,
        authenticated: false
      }
      break
    case userConstance.USER_BALANCE:
      console.log('BALANCEACTIONPAYLOAD', action.payload.amount)
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
