import { Link } from 'react-router-dom'

import { LOGIN_ROUTE, REGISTER_ROUTE } from '../constants/routs'

import './index.scss'

const Auth = () => (
  <div className="auth">
    <button className="signIn__button auth__button">
      <Link to={LOGIN_ROUTE}> Sign In</Link>
    </button>
    <button className="signUp__button auth__button">
      <Link to={REGISTER_ROUTE}> Sign Up</Link>
    </button>
  </div>
)

export default Auth
