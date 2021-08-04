import './index.scss'
import { Link, NavLink, useHistory } from 'react-router-dom'
import homeIcon from '../../images/home.svg'
import userIcon from '../../images/user.svg'
import Auth from '../../auth'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../store/auth/action'

const Header = () => {
  const history = useHistory()
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const logoutUser = () => {
    dispatch(logout())
    history.push('/register')
  }

  return (
    <div className="header">
      <div className="header__logo">
        <img 
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
        alt='logo'
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
        <div className="header__logout">
          <Link to="#" onClick={logoutUser}>
            Logout
          </Link>
        </div>
      ) : null}
    </div>
  )
}

export default Header
