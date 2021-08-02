import './index.scss'
import { NavLink, useHistory } from 'react-router-dom'
import homeIcon from '../../images/home.svg'
import userIcon from '../../images/user.svg'
import Auth from '../../auth'
import { useSelector } from 'react-redux'

const Header = () => {
  const history = useHistory()
  const auth = useSelector(state => state.auth)

  const logout = () => {
    localStorage.clear()
    history.push('/login')
  }

  return (
    <div className="header">
      <div className="header__logo">
        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
      </div>
      {auth.authenticated ? (
        <div className="header__navigation">
          <NavLink to="/" activeClassName="selected">
            <img src={homeIcon} alt="home-page" />
          </NavLink>
          <NavLink to="/userPage" activeClassName="selected">
            <img src={userIcon} alt="user-icon" />
          </NavLink>
        </div>
      ) : null}

      {!auth.authenticated ? (
        <Auth />
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </div>
  )
}

export default Header
