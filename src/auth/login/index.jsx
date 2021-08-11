import classNames from 'classnames'
import { useMemo, useState } from 'react'
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

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  })

  const dispatch = useDispatch()
  const history = useHistory()

  let { email, password } = userLoginData

  const loginData = useMemo(() => {
    return [
      {
        type: 'email',
        name: 'email',
        value: email,
        text: 'Email',
        error: errors.email
      },
      {
        type: 'password',
        name: 'password',
        value: password,
        text: 'Password',
        error: errors.password
      }
    ]
  }, [email, password, errors.email, errors.password])

  const getIsButtonDisabled = () =>
    !email || !password || errors.email || errors.password

  const handleChange = event => {
    const { value, name } = event.target
    console.log('errors', errors)
    setErrors({ ...errors, [name]: '' })
    console.log('errors', errors)
    setUserLoginData({ ...userLoginData, [name]: value })
  }

  const getEmptyFieldsWithErrors = userLoginData => {
    let emptyFields = {}
    Object.entries(userLoginData).forEach(([key, value]) => {
      !value && (emptyFields[key] = "can't be empty")
    })
    console.log('emptyFields', emptyFields)
  }

  const loginUser = event => {
    event.preventDefault()
    // const { email, password } = userLoginData

    // const emptyFieldsWithErrors = getEmptyFieldsWithErrors(userLoginData)

    // const areFildsWithErrorsEmpty = !!Object.keys(emptyFieldsWithErrors).length

    // if (areFildsWithErrorsEmpty) {
    //   setErrors({ ...errors, ...emptyFieldsWithErrors })
    // } else {
    dispatch(signIn(email, password, history))
    console.log('email', email)
    console.log('password', password)
  

    setUserLoginData({
      email: '',
      password: ''
    })
    // }
  }
  console.log('errors', errors)
  return (
    <div className="login">
      <div className="login__box">
        <h1>Login</h1>
        <form className="login__form">
          {loginData.map(({ name, type, value, text, error }, idx) => {
            return (
              <CustomInput
                key={idx}
                name={name}
                type={type}
                value={value}
                text={text}
                onChange={handleChange}
                error={error}
              />
            )
          })}

          <button
            className={classNames('login__btn', {
              disabled: getIsButtonDisabled()
            })}
            type="submit"
            onClick={loginUser}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
