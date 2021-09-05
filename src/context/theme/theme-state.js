import { useState, useContext } from 'react'

import ThemeContext from './theme-context'

const ThemeState = props => {
  const [changeThemeToDark, setChangeThemeToDark] = useState(false)

  const themeChangeToggle = () => setChangeThemeToDark(!changeThemeToDark)
  

  return (
    <ThemeContext.Provider
      value={{
        changeThemeToDark,
        themeChangeToggle
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeState

export const useTheme = () => useContext(ThemeContext)
