import { useState } from 'react'
import './index.scss'
import { signUp } from '../../store/auth/action'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useMemo } from 'react'
import CustomInput from '../custom-unput'

const Register = () => {
  const [userCredentials, setUserCredentials] = useState({
    firstName: '',
    secondName: '',
    email: '',
    password: ''
  })

  let [errors, setErrors] = useState({
    firstName: '',
    secondName: '',
    email: '',
    password: ''
  })

  const dispatch = useDispatch()
  const history = useHistory()

  const userCredencialData = useMemo(() => {
    return [
      {
        type: 'text',
        name: 'firstName',
        value: userCredentials.firstName,
        text: 'First Name',
        error: errors.firstName
      },
      {
        type: 'text',
        name: 'secondName',
        value: userCredentials.secondName,
        text: 'Second Name',
        error: errors.secondName
      },
      {
        type: 'email',
        name: 'email',
        value: userCredentials.email,
        text: 'Email',
        error: errors.email
      },
      {
        type: 'password',
        name: 'password',
        value: userCredentials.password,
        text: 'Password',
        error: errors.password
      }
    ]
  }, [
    userCredentials.firstName,
    userCredentials.secondName,
    userCredentials.email,
    userCredentials.password
  ])

  const handleChange = event => {
    const { value, name } = event.target
    setUserCredentials({ ...userCredentials, [name]: value })
  }

  // const handleBlur = event => {
  //   event.preventDefault()

  //   const { name } = event.target
  //   console.log(name)
  //   switch (name) {
  //     case 'firstName':
  //       setErrors({ firstName: 'cant be empty' })
  //       console.log('errors', errors)
  //       break
  //     case 'secondName':
  //       setErrors({ secondName: 'cant be empty' })
  //       console.log('errors', errors)
  //       break
  //     case 'email':
  //       setErrors({ email: 'cant be empty' })
  //       console.log('errors', errors)
  //       break
  //     case 'password':
  //       setErrors({ password: 'cant be empty' })
  //       console.log('errors', errors)
  //       break
  //   }
  // }

  const registerUser = event => {
    event.preventDefault()

    const { firstName, secondName, email, password } = userCredentials

    //TODO password = window.btoa(password) пароль должен быть захешен, но пока ругается на него консоль, исправить

    // errors = { ...errors }

    // if (firstName === '') {
    //   setErrors({ firstName: 'cant be empty' })
    //   console.log('errors', errors)
    //   console.log('FIRST NAME:', errors.firstName)
    //   return
    // }
    // if (secondName === '') {
    //   setErrors({ ...errors, secondNameError: 'Second Name is required' })
    //   console.log('errors', errors)
    //   console.log('SECOND NAME ERROR:', errors.secondNameError)
    //   return
    // }

    // if (firstName === '') {
    //   errors.firstNameError = 'First Name is required'
    //   console.log(errors.firstNameError)
    
    //   return
    // }

    // if (secondName === '') {
    //   errors.secondNameError = 'Second Name is required'
    //   console.log(errors.secondNameError)
   
    //   return
    // }
    // if (email === '') {
    //   errors.emailError = 'Email is required'
    //   console.log(errors.emailError)
   
    //   return
    // }
    // if (password === '') {
    //   errors.passwordError = 'Password is required'
    //   console.log(errors.passwordError)
  
    //   return
    // }

    setErrors(errors)

    dispatch(signUp(userCredentials))

    history.push('/')

    setUserCredentials({
      firstName: '',
      secondName: '',
      email: '',
      password: ''
    })
  }

  return (
    <div className="register">
      <div className="register__box">
        <h1>Register</h1>
        <form className="register__form">
          {userCredencialData.map((item, idx) => {
            return (
              <CustomInput
                key={idx}
                type={item.type}
                text={item.text}
                name={item.name}
                value={item.value}
                flag={item.flag}
                onChange={handleChange}
                // onBlur={handleBlur}
                error={item.error }
              />
            )
          })}

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

{
  /* <div className="register__user_data">
            <label>
              <span>First Name</span>
              <input
                type="text"
                name="firstName"
                value={userCredentials.firstName}
                onChange={handleChange}
              />
            </label>

            <label>
              <span>Second Name</span>
              <input
                className="secondName"
                type="text"
                name="secondName"
                value={userCredentials.secondName}
                onChange={handleChange}
              />
            </label>
          </div>

          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={userCredentials.email}
              onChange={handleChange}
            />
          </label>

          <label>
            <span>Password</span>
            <input
              type="password"
              name="password"
              value={userCredentials.password}
              onChange={handleChange}
            />
          </label> */
}
