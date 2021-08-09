import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useHistory } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import Auth from '../../auth'
import homeIcon from '../../images/home.svg'
import userIcon from '../../images/user.svg'

import { logout } from '../../store/auth/action'

import './index.scss'
import { handleLanguageChange } from '../../utils/translation'

const Header = () => {
  const history = useHistory()
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const logoutUser = () => {
    dispatch(logout())
    history.push('/register')
  }

  const { t } = useTranslation('translation')

  return (
    <div className="header">
      <div className="header__logo">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="logo"
        />
      </div>

      {auth.authenticated ? (
        <div className="header__navigation">
          <NavLink to="/">
            <img src={homeIcon} alt="home-icon" />
          </NavLink>
          <NavLink to="/user-page">
            <img src={userIcon} alt="user-page-icon" />
          </NavLink>
        </div>
      ) : null}

      {!auth.authenticated ? <Auth /> : null}

      {auth.authenticated ? (
        <div className="header__language_change">
          <p>{t('message')}</p>
          <button onClick={handleLanguageChange}>{t('changeLanguage')}</button>
        </div>
      ) : null}

      {auth.authenticated ? (
        <div className="header__logout">
          <Link to="#" onClick={logoutUser}>
            {t('Logout')}
          </Link>
        </div>
      ) : null}
    </div>
  )
}

export default Header
