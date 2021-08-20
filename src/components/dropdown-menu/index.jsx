import { Link, useHistory } from 'react-router-dom'
import { handleLanguageChange } from '../../utils/translation'

import { useTranslation } from 'react-i18next'

import { useTheme } from '../../context/test/test-state'

import { logout } from '../../store/user/action'

import { useDispatch } from 'react-redux'
import { FAKE_ROUTE, REGISTER_ROUTE } from '../../constants/routs'
import { useSelector } from 'react-redux'

import './index.scss'

function DropdownMenu({ isVisibleDropdown }) {
  const history = useHistory()

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const { changeThemeToDark, themeChangeToggle } = useTheme()

  const { t } = useTranslation('translation')

  const logoutUser = () => {
    dispatch(logout())
    isVisibleDropdown()
    history.push(`${REGISTER_ROUTE}`)
  }
  return (
    <>
      {user.authenticated ? (
        <div className="dropdown-menu">
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
      ) : null}
    </>
  )
}

export default DropdownMenu
