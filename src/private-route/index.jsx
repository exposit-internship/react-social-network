import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { REGISTER_ROUTE } from '../constants/routs'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useSelector(state => state.user)

  return (
    <Route
      {...rest}
      render={props =>
        !user ? <Redirect to={REGISTER_ROUTE} /> : <Component {...props} />
      }
    />
  )
}

export default PrivateRoute
