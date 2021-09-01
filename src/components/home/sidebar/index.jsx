import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { getUser } from '../../../redux/user/action'
import SidebarOption from '../sidebar-option'

import { USER_PAGE_ROUTE, WATCH_ROUTE } from '../../../constants/routs'

import './index.scss'

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
        />
        <SidebarOption to={WATCH_ROUTE} text={t('Watch')} />
      </div>
    </div>
  )
}

export default Sidebar
