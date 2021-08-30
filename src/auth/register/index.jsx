import { useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import classNames from 'classnames'

import PropTypes from 'prop-types'

import { v4 as uuidv4 } from 'uuid'

import { signUp } from '../../store/user/action'

import {
  getEmptyFieldsWithErrors,
  getIsButtonDisabled
} from '../../utils/registration'

import CustomInput from '../custom-unput'

import '../index.scss'

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
    amount: 1,
    id: uuidv4()
  })

  let [errors, setErrors] = useState(INITIAL_ERROR_STATE)

  const dispatch = useDispatch()
  const history = useHistory()

  const { firstName, secondName, email, password } = userCredentials

  getIsButtonDisabled(
    firstName,
    secondName,
    email,
    password,
    errors.firstName,
    errors.secondName,
    errors.email,
    errors.password
  )

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

  const registerUser = event => {
    event.preventDefault()

    const { email, password } = userCredentials

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
    }
  }

  return (
    <div className="registration__form">
      <div className="registration__container">
        <h1>Register</h1>
        <form className="registration__input-data">
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
            className={classNames('registration__button ', {
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

Register.propTypes = {
  firstName: PropTypes.string,
  secondName: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  INITIAL_ERROR_STATE: PropTypes.shape({
    firstName: PropTypes.string,
    secondName: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string
  }),
  idx: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string
}
