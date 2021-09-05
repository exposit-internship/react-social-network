import { useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import classNames from 'classnames'

import { CustomInput } from '../../internal'
import { signIn } from '../../../redux/user/action'
import {
  getEmptyFieldsWithErrors,
  getIsButtonDisabled
} from '../../../utils/registration'

import '../auth/index.scss'

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

  getIsButtonDisabled(email, password, errors.email, errors.password)

  const loginData = useMemo(
    () => [
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
    ],
    [email, password, errors.email, errors.password]
  )

  const handleChange = event => {
    const { value, name } = event.target
    setErrors({ ...errors, [name]: '' })
    setUserLoginData({ ...userLoginData, [name]: value })
  }

  const loginUser = event => {
    event.preventDefault()
    const { email, password } = userLoginData

    const emptyFieldsWithErrors = getEmptyFieldsWithErrors(userLoginData)

    const areFildsWithErrorsEmpty = !!Object.keys(emptyFieldsWithErrors).length

    areFildsWithErrorsEmpty
      ? setErrors({ ...errors, ...emptyFieldsWithErrors })
      : dispatch(signIn(email, password, history))
  }
  
  return (
    <div className="registration__form">
      <div className="registration__container">
        <h1>Login</h1>
        <form className="registration__input-data">
          {loginData.map(({ name, type, value, text, error }, idx) => (
            <CustomInput
              key={idx}
              name={name}
              type={type}
              value={value}
              text={text}
              onChange={handleChange}
              error={error}
            />
          ))}

          <button
            className={classNames('registration__button', {
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
