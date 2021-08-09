export default userCredencialData = useMemo(() => {
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
