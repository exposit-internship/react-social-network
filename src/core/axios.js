import axios from 'axios'

export const DB = axios.create({
  baseURL: `${process.env.REACT_APP_LOCALHOST_5000}`,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  },
  responseEncoding: 'utf8',
  method: 'get',
  timeout: 10000000
})

export const showsDB = axios.create({
  baseURL:
    'https://api.themoviedb.org/3/discover/movie?api_key=e584e80ffd47067a2ad8adc079c00f5c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  },
  responseEncoding: 'utf8',
  method: 'get',
  timeout: 10000000
})
