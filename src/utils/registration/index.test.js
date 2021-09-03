import { getIsButtonDisabled } from './index'

const mocckDB = {
  userFirstName: 'Ilia',
  userSecondName: 'White',
  userEmail: 'w@mail.ru',
  userPassword: '111111',
  userErrorFirstName: '',
  userErrorSeconsdName: '',
  userErrorEmail: '',
  userErrorPassword: ''
}

describe('getIsButtonDisabled', () => {
  it('disable button', () => {
    expect(getIsButtonDisabled(mocckDB)).toBe(true)
  })
  it('have user propierty', () => {
    expect(mocckDB).toMatchObject({
      userFirstName: expect.any(String),
      userSecondName: expect.any(String),
      userEmail: expect.any(String),
      userPassword: expect.any(String)
    })
  })
  it('field email include @', () => {
    expect(mocckDB.userEmail).toMatch(/@/)
  })
  // it('field email include .com', () => {
  //   expect(mocckDB.userEmail).toMatch(/@/, /email/, /./, /com/, /ru/, /by/)
  // })
})
