import { useState } from 'react'
import './index.scss'
import { signUp } from '../../store/auth/action'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  const registerUser = event => {
    event.preventDefault()

    const user = {
      firstName,
      secondName,
      email,
      password
    }

    dispatch(signUp(user))

    setFirstName('')
    setSecondName('')
    setEmail('')
    setPassword('')
  }

  return (
    <div className="register">
      <div className="register__box">
        <h1>Register</h1>
        <form className="register__form">
          <div className="register__user_data">
            <label>
              <span>First Name</span>
              <input
                type="text"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </label>

            <label>
              <span>Second Name</span>
              <input
                className="secondName"
                type="text"
                value={secondName}
                onChange={e => setSecondName(e.target.value)}
              />
            </label>
          </div>

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

          <button
            className="register__btn"
            type="submit"
            onClick={registerUser}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
