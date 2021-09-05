import { userConstance } from './types'

const initialState = {
  user: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case userConstance.GET_USER:
      return {
        ...state,
        user: action.payload
      }

    case userConstance.USER_LOGIN:
      return {
        ...state,
        user: action.payload
      }

    case userConstance.USER_LOGOUT:
      return {
        ...state,
        ...initialState
      }

    case userConstance.USER_BALANCE:
      return {
        ...state,
        user: {
          ...state.user,
          amount: action.payload.amount
        }
      }

    default:
      return state
  }
}
