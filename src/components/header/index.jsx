import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import Monetization from '../monetization'
import homeIcon from '../../images/home.svg'
import userIcon from '../../images/user.svg'
import downArrow from '../../images/downArrow.svg'
import Auth from '../../auth'

import { INDEX_ROUTE, USER_PAGE_ROUTE } from '../../constants/routs'

import './index.scss'
import { useState } from 'react'
import DropdownMenu from '../dropdown-menu'
import { useCallback } from 'react'

const Header = () => {
  const [isVisibleMenu, setIsVisibleMenu] = useState(false)

  const user = useSelector(state => state.user)

  const isVisibleDropdown = useCallback(
    () => setIsVisibleMenu(!isVisibleMenu),
    [isVisibleMenu]
  )

  return (
    <div className="header">
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

      {user.authenticated ? <Monetization /> : null}

      {!user.authenticated ? <Auth /> : null}

      {user.authenticated ? (
        <button onClick={isVisibleDropdown}>Dropdown</button>
      ) : null}
      {!isVisibleMenu ? (
        <DropdownMenu isVisibleDropdown={isVisibleDropdown} />
      ) : null}
    </div>
  )
}

export default Header
