import { showsConstance } from './types'

const initialState = {
  shows: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case showsConstance.GET_SHOWS:
      state = {
        ...state,
        shows: action.payload
      }
      break
      case showsConstance.GET_CURRENT_SHOW:
        state={
          ...state,
          shows: action.payload
        }
  }
  return state
}
