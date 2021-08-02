import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signIn } from '../../store/auth/action'
import './index.scss'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  const loginUser = event => {
    event.preventDefault()

    dispatch(signIn({ email, password }))
    console.log({ email, password })
    setEmail('')
    setPassword('')
  }

  if (auth.authentecated) {
    return <Redirect to="/" />
  }

  return (
    <div className="login">
      <div className="login__box">
        <h1>Login</h1>
        <form className="login__form">
          <label>
            <span>Email</span>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>

          <label>
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>

          <button className="login__btn" type="submit" onClick={loginUser}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
