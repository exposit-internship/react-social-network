import { NavLink } from 'react-router-dom'
import './index.scss'

const Auth = () => {
  return (
    <div className="auth">
      <button className="signIn__btn auth__btn">
        <NavLink to="/login"> Sign In</NavLink>
      </button>
      <button className="signUp__btn auth__btn">
        <NavLink to="/register"> Sign Up</NavLink>
      </button>
    </div>
  )
}

export default Auth
