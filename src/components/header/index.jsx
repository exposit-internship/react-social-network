import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useHistory } from 'react-router-dom'

import { useTranslation } from 'react-i18next'
import { handleLanguageChange } from '../../utils/translation'

import { logout } from '../../store/user/action'
import Auth from '../../auth'

import Monetization from '../monetization'

import homeIcon from '../../images/home.svg'
import userIcon from '../../images/user.svg'

import './index.scss'
import {
  FAKE_ROUTE,
  INDEX_ROUTE,
  REGISTER_ROUTE,
  USER_PAGE_ROUTE
} from '../../constants/routs'
import { useTheme } from '../../context/test/test-state'
import classNames from 'classnames'

const Header = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const { changeThemeToDark, themeChangeToggle } = useTheme()

  const logoutUser = () => {
    dispatch(logout())
    history.push(`${REGISTER_ROUTE}`)
  }

  const { t } = useTranslation('translation')

  return (
    <div className={classNames('header', { darkmode: changeThemeToDark })}>
      <div className="header__logo">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="logo"
        />
      </div>

      {user.authenticated ? (
        <div className="header__navigation">
          <NavLink to={INDEX_ROUTE}>
            <img src={homeIcon} alt="home-icon" />
          </NavLink>
          <NavLink to={USER_PAGE_ROUTE}>
            <img src={userIcon} alt="user-page-icon" />
          </NavLink>
        </div>
      ) : null}

      {!user.authenticated ? <Auth /> : null}

      {user.authenticated ? (
        <div className="header__language_change">
          <p>{t('message')}</p>
          <button onClick={handleLanguageChange}>{t('changeLanguage')}</button>
        </div>
      ) : null}

      {user.authenticated ? <Monetization /> : null}

      <button onClick={themeChangeToggle}>
        {changeThemeToDark ? 'dark' : 'light'}
      </button>

      {user.authenticated ? (
        <div className="header__logout">
          <Link to={FAKE_ROUTE} onClick={logoutUser}>
            {t('Logout')}
          </Link>
        </div>
      ) : null}
    </div>
  )
}

export default Header
