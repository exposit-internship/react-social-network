import { showsDB } from '../../core/axios'
import { showsConstance } from './types'

export const getShows = () => {
  return async dispatch => {
    showsDB().then(({ data }) => {
      dispatch({
        type: showsConstance.GET_SHOWS,
        payload: data.results
      })
    })
  }
}
