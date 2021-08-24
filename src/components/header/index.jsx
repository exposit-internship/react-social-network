import { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import Auth from '../../auth'
import Monetization from '../monetization'
import DropdownMenu from '../dropdown-menu'

import { INDEX_ROUTE, USER_PAGE_ROUTE } from '../../constants/routs'

import homeIcon from '../../images/home.svg'
import userIcon from '../../images/user.svg'

import './index.scss'

const Header = () => {
  const [isVisibleMenu, setIsVisibleMenu] = useState(false)

  const isVisibleDropdown = useCallback(
    () => setIsVisibleMenu(!isVisibleMenu),
    [isVisibleMenu]
  )

  const user = useSelector(state => state.user)

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

      {user.authenticated ? (
        <Monetization isVisibleDropdown={isVisibleDropdown} />
      ) : null}
      {user.authenticated ? (
        <DropdownMenu isVisibleDropdown={isVisibleDropdown} />
      ) : null}
      {!user.authenticated ? <Auth /> : null}
    </div>
  )
}

export default Header
