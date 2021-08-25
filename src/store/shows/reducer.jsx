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
  }
  return state
}
