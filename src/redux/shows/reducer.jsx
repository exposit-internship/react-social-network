import { showsConstance } from './types'

const initialState = {
  shows: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case showsConstance.GET_SHOWS:
      return {
        ...state,
        shows: action.payload
      }

    case showsConstance.GET_CURRENT_SHOW:
      return {
        ...state,
        shows: action.payload
      }
      
    default:
      return state
  }
}
