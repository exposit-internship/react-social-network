import { NavLink } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTER_ROUTE } from '../constants/routs'

import './index.scss'

const Auth = () => {
  return (
    <div className="auth">
      <button className="signIn__button auth__button">
        <NavLink to={LOGIN_ROUTE}> Sign In</NavLink>
      </button>
      <button className="signUp__button auth__button">
        <NavLink to={REGISTER_ROUTE}> Sign Up</NavLink>
      </button>
    </div>
  )
}

export default Auth
