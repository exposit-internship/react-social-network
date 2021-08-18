import classNames from 'classnames'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { signIn } from '../../store/user/action'
import CustomInput from '../custom-unput'

const Login = () => {
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  })

  const [userLoginData, setUserLoginData] = useState({
    email: '',
    password: ''
  })

  const { user } = useSelector(state => state.user)

  const dispatch = useDispatch()
  const history = useHistory()

  let { email, password } = userLoginData

  const getIsButtonDisabled = () =>
    !email || !password || errors.email || errors.password

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

  const handleChange = event => {
    const { value, name } = event.target
    setErrors({ ...errors, [name]: '' })
    setUserLoginData({ ...userLoginData, [name]: value })
  }

  const getEmptyFieldsWithErrors = userLoginData => {
    let emptyFields = {}
    Object.entries(userLoginData).forEach(([key, value]) => {
      !value && (emptyFields[key] = "can't be empty")
    })
    return emptyFields
  }

  const loginUser = event => {
    event.preventDefault()
    const { email, password } = userLoginData

    const emptyFieldsWithErrors = getEmptyFieldsWithErrors(userLoginData)

    const areFildsWithErrorsEmpty = !!Object.keys(emptyFieldsWithErrors).length

    if (areFildsWithErrorsEmpty) {
      setErrors({ ...errors, ...emptyFieldsWithErrors })
    } else {
      dispatch(signIn(email, password, history))

      setUserLoginData({
        email: '',
        password: ''
      })
    }
  }
  return (
    <div className="login registration__form">
      <div className="login__box box">
        <h1>Login</h1>
        <form className="login__form form">
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
            className={classNames('login__button', 'button', {
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
