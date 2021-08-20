import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { isLoggedInUser } from '../store/user/action'

import { Home, Header, UserPage } from '../components'
import Login from '../auth/login'
import Register from '../auth/register'

import {
  INDEX_ROUTE,
  USER_PAGE_ROUTE,
  REGISTER_ROUTE,
  LOGIN_ROUTE
} from '../constants/routs'

import './index.scss'

import { useTheme } from '../context/test/test-state'
import classNames from 'classnames'

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const { changeThemeToDark } = useTheme()

  useEffect(() => {
    const lightTheme = '#ffffff'
    const darkTheme = '#505050'
    document.body.style.background = changeThemeToDark ? darkTheme : lightTheme
  }, [changeThemeToDark])

  useEffect(() => {
    if (!user.authenticated) {
      dispatch(isLoggedInUser())
    }
  }, [])

  return (
    <BrowserRouter>
      <div className={classNames('App', { darkModeTheme: changeThemeToDark })}>
        <Header />
        <Switch>
          <Route path={INDEX_ROUTE} component={Home} exact />
          <Route path={USER_PAGE_ROUTE} component={UserPage} />
          <Route path={REGISTER_ROUTE} component={Register} />
          <Route path={LOGIN_ROUTE} component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
export default App
