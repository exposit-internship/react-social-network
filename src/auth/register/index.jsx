import { useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import classNames from 'classnames'
import { v4 as uuidv4 } from 'uuid'

import CustomInput from '../custom-unput'

import { signUp } from '../../store/auth/action'

import './index.scss'

const INITIAL_ERROR_STATE = {
  firstName: '',
  secondName: '',
  email: '',
  password: ''
}

const Register = () => {
  const [userCredentials, setUserCredentials] = useState({
    firstName: '',
    secondName: '',
    email: '',
    password: '',
    id: uuidv4()
  })

  let [errors, setErrors] = useState(INITIAL_ERROR_STATE)

  const { firstName, secondName, email, password } = userCredentials

  const getIsButtonDisabled = () =>
    !firstName ||
    !secondName ||
    !email ||
    !password ||
    errors.firstName ||
    errors.secondName ||
    errors.email ||
    errors.password

  // const hashedPassword = window.btoa(password)
  // console.log(hashedPassword)

  const dispatch = useDispatch()
  const history = useHistory()

  const userCredencialData = useMemo(
    () => [
      {
        type: 'text',
        name: 'firstName',
        value: firstName,
        text: 'First Name',
        error: errors.firstName
      },
      {
        type: 'text',
        name: 'secondName',
        value: secondName,
        text: 'Second Name',
        error: errors.secondName
      },
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
    [
      firstName,
      secondName,
      email,
      password,
      errors.firstName,
      errors.secondName,
      errors.email,
      errors.password
    ]
  )

  const handleChange = event => {
    const { value, name } = event.target
    setErrors({ ...errors, [name]: '' })
    setUserCredentials({ ...userCredentials, [name]: value })
  }

  const getEmptyFieldsWithErrors = userCredentials => {
    let emptyFields = {}
    Object.entries(userCredentials).forEach(([key, value]) => {
      !value && (emptyFields[key] = 'can\'t be empty')
    })

    return emptyFields
  }

  const registerUser = event => {
    event.preventDefault()

    const { firstName, secondName, email, password } = userCredentials

    //TODO password = window.btoa(password) пароль должен быть захешен, но пока ругается на него консоль, исправить

    const emptyFieldsWithErrors = getEmptyFieldsWithErrors(userCredentials)

    const areFildsWithErrorsEmpty = !!Object.keys(emptyFieldsWithErrors).length

    if (areFildsWithErrorsEmpty) {
      setErrors({ ...errors, ...emptyFieldsWithErrors })
    } else {
      const transformedUserCredentials = {
        ...userCredentials,
        password: window.btoa(password)
      }
      dispatch(signUp(transformedUserCredentials, email, history))

      setUserCredentials({
        firstName: '',
        secondName: '',
        email: '',
        password: ''
      })
    }
  }

  return (
    <div className="register">
      <div className="register__box">
        <h1>Register</h1>
        <form className="register__form">
          {userCredencialData.map(({ type, text, name, value, error }, idx) => (
            <CustomInput
              key={idx}
              type={type}
              text={text}
              name={name}
              value={value}
              onChange={handleChange}
              error={error}
            />
          ))}

          <button
            className={classNames('register__btn', {
              disabled: getIsButtonDisabled()
            })}
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
