import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import { handleLanguageChange } from '../../utils/translation'

import { useTheme } from '../../context/test/test-state'

import { logout } from '../../store/user/action'

import { FAKE_ROUTE } from '../../constants/routs'

import './index.scss'
import { useState } from 'react'
import { useCallback } from 'react'

function DropdownMenu() {
  const [isVisibleMenu, setIsVisibleMenu] = useState(false)

  const isVisibleDropdown = useCallback(
    () => setIsVisibleMenu(!isVisibleMenu),
    [isVisibleMenu]
  )

  const history = useHistory()
  const dispatch = useDispatch()

  const { user } = useSelector(state => state.user)

  const { changeThemeToDark, themeChangeToggle } = useTheme()

  const { t } = useTranslation('translation')

  const logoutUser = () => {
    dispatch(logout(history))
    setIsVisibleMenu(!isVisibleMenu)
  }

  return (
    <div className="dropdown-menu">
      <Link
        className="dropdown-menu__button"
        to={FAKE_ROUTE}
        onClick={isVisibleDropdown}
      >
        {t('menu')}
      </Link>

      {isVisibleMenu && (
        <div className="dropdown-menu__container">
          <div className="dropdown-menu__language_change dropdown-menu__item">
            <Link to={FAKE_ROUTE} onClick={handleLanguageChange}>
              {t('changeLanguage')}
            </Link>
          </div>

          <div className="dropdown-menu__theme_change dropdown-menu__item">
            <Link to={FAKE_ROUTE} onClick={themeChangeToggle}>
              {changeThemeToDark ? t('light') : t('dark')}
            </Link>
          </div>

          <div className="dropdown-menu__logout dropdown-menu__item">
            <Link to={FAKE_ROUTE} onClick={logoutUser}>
              {t('logout')}
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownMenu
