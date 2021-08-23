export const getIsButtonDisabled = (
  userFirstName,
  userSecondName,
  userEmail,
  userPassword,
  userErrorFirstName,
  userErrorSeconsdName,
  userErrorEmail,
  userErrorPassword
) =>
  !userFirstName ||
  !userSecondName ||
  !userEmail ||
  !userPassword ||
  userErrorFirstName ||
  userErrorSeconsdName ||
  userErrorEmail ||
  userErrorPassword

export const getEmptyFieldsWithErrors = userEnteredData => {
  let emptyFields = {}
  Object.entries(userEnteredData).forEach(([key, value]) => {
    !value && (emptyFields[key] = "can't be empty")
  })
  return emptyFields
}
