import { getIsButtonDisabled } from './index'

const mockDB = {
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
    expect(getIsButtonDisabled(mockDB)).toBe(true)
  })
  it('have user propierty', () => {
    expect(mockDB).toMatchObject({
      userFirstName: expect.any(String),
      userSecondName: expect.any(String),
      userEmail: expect.any(String),
      userPassword: expect.any(String)
    })
  })
  it('field email include @', () => {
    expect(mocckDB.userEmail).toMatch(/@/)
  })
})
