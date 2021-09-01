import { showsDB } from '../../core/axios'
import { showsConstance } from './types'

export const getShows = () => dispatch =>
  showsDB().then(({ data }) => {
    dispatch({
      type: showsConstance.GET_SHOWS,
      payload: data.results
    })
  })

export const getCurrentShow = id => dispatch =>
  showsDB().then(({ data }) => {
    console.log("DATA", data)
    const currentShow = data.results.find(show => show.id === id)
    dispatch({
      type: showsConstance.GET_CURRENT_SHOW,
      payload: currentShow
    })
    console.log("ACTIONCURRENTSHOW", currentShow)
  })
