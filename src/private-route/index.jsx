import { Redirect, Route } from 'react-router-dom'
import { REGISTER_ROUTE } from '../constants/routs'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = window.localStorage.getItem('user')

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated !== 'user' ? (
          <Redirect to={REGISTER_ROUTE} />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

export default PrivateRoute
