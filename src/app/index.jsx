import { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import classNames from 'classnames'

import PrivateRoute from '../private-route'
import { Login, Register } from '../components/auth'
import { Home, Header, UserPage, Watch } from '../components'
import { useTheme } from '../context/theme/theme-state'

import {
  INDEX_ROUTE,
  USER_PAGE_ROUTE,
  REGISTER_ROUTE,
  LOGIN_ROUTE,
  WATCH_ROUTE
} from '../constants/routs'
import { DARK_THEME, LIGHT_THEME } from '../constants/change-theme'

import './index.scss'

const App = () => {
  const { changeThemeToDark } = useTheme()

  useEffect(() => {
    document.body.style.background = changeThemeToDark
      ? DARK_THEME
      : LIGHT_THEME
  }, [changeThemeToDark])

  return (
    <BrowserRouter>
      <div className={classNames('app', { darkModeTheme: changeThemeToDark })}>
        <Header />
        <Switch>
          <PrivateRoute path={INDEX_ROUTE} component={Home} exact />
          <PrivateRoute path={USER_PAGE_ROUTE} component={UserPage} />
          <PrivateRoute path={WATCH_ROUTE} component={Watch} />
          <Route path={REGISTER_ROUTE} component={Register} />
          <Route path={LOGIN_ROUTE} component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
export default App
