import { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Auth from '../auth'
import Monetization from '../monetization'
import DropdownMenu from '../dropdown-menu'

import { INDEX_ROUTE, USER_PAGE_ROUTE } from '../../constants/routs'

import './index.scss'

const Header = () => {
  const [isVisibleMenu, setIsVisibleMenu] = useState(false)

  const isVisibleDropdown = useCallback(
    () => setIsVisibleMenu(!isVisibleMenu),
    [isVisibleMenu]
  )
  const closeDropDown = () => setIsVisibleMenu(false)

  const { user } = useSelector(state => state.user)

  return (
    <div className="header">
      <div className="header__logo">
        <h1>Facebook</h1>
      </div>
      {user ? (
        <div className="header__navigation">
          <Link to={INDEX_ROUTE} className="header__navigation-home">
            Home
          </Link>
          <Link to={USER_PAGE_ROUTE} className="header__navigation-user">
            Master 
          </Link>
        </div>
      ) : null}

      {user ? <Monetization closeDropDown={closeDropDown} /> : null}
      {user ? (
        <DropdownMenu
          isVisibleMenu={isVisibleMenu}
          isVisibleDropdown={isVisibleDropdown}
        />
      ) : null}
      {!user ? <Auth /> : null}
    </div>
  )
}

export default Header
