import { useSelector } from 'react-redux'

import { useTranslation } from 'react-i18next'

import { USER_PAGE_ROUTE, WATCH_ROUTE } from '../../../constants/routs'

import PropTypes from 'prop-types'

import SidebarOption from '../sidebar-option'
import { getUser } from '../../../store/user/action'
import './index.scss'
import { useEffect } from 'react'

import { useDispatch } from 'react-redux'

const Sidebar = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation('translation')

  useEffect(() => dispatch(getUser(email)), [])

  const { user } = useSelector(state => state.user)
  const { firstName, secondName, email, amount } = user

  return (
    <div className="sidebar">
      <h2>{`${t('yourBalance')}: ${amount}$`} </h2>
      <div className="sidebar__nav">
        <SidebarOption
          to={USER_PAGE_ROUTE}
          text={`${firstName} ${secondName}`}
          src=""
        />
        <SidebarOption to={WATCH_ROUTE} text={t('Watch')} src="" />
      </div>
    </div>
  )
}

export default Sidebar

Sidebar.propTypes = {
  amount: PropTypes.number,
  firstName: PropTypes.string,
  secondName: PropTypes.string
}
