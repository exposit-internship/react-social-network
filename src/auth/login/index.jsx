import { useMemo } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signIn } from '../../store/auth/action'
import CustomInput from '../custom-unput'
import './index.scss'

const Login = () => {
  const [userLoginData, setUserLoginData] = useState({
    email: '',
    password: ''
  })

  const loginData = useMemo(() => {
    return [
      {
        type: 'email',
        name: 'email',
        value: userLoginData.email,
        text: 'Email'
      },
      {
        type: 'password',
        name: 'password',
        value: userLoginData.password,
        text: 'Password'
      }
    ]
  }, [userLoginData.email, userLoginData.password])

  const dispatch = useDispatch()
  const history = useHistory()

  const handleChange = event => {
    event.preventDefault()

    const { value, name } = event.target
    setUserLoginData({ ...userLoginData, [name]: value })
  }

  const { email, password } = userLoginData

  const loginUser = event => {
    event.preventDefault()

    // const { email, password } = userLoginData

    dispatch(signIn({ email, password }))
    history.push('/')

    setUserLoginData({
      email: '',
      password: ''
    })
  }

  

  return (
    <div className="login">
      <div className="login__box">
        <h1>Login</h1>
        <form className="login__form">
          {loginData.map((item, idx) => {
            return (
              <CustomInput
                key={idx}
                name={item.name}
                type={item.type}
                value={item.value}
                text={item.text}
                onChange={handleChange}
              />
            )
          })}

          <button className="login__btn" type="submit" onClick={loginUser}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
