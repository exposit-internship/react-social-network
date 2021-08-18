import { useState, useContext } from 'react'

import TestContext from './test-context'

const TestState = props => {
  const [changeThemeToDark, setChangeThemeToDark] = useState(false)

  const themeChangeToggle = () => setChangeThemeToDark(!changeThemeToDark)
  

  return (
    <TestContext.Provider
      value={{
        changeThemeToDark,
        themeChangeToggle
      }}
    >
      {props.children}
    </TestContext.Provider>
  )
}

export default TestState

export const useTheme = () => useContext(TestContext)
