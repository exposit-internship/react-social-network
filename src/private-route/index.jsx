import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isUserAuthentecated = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null

  return (
    <Route
      {...rest}
      render={props =>
        !isUserAuthentecated ? (
          <Redirect to="/register" />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

export default PrivateRoute
