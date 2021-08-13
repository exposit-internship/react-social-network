import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import SidebarOption from '../sidebar-option'

import './index.scss'

const Sidebar = () => {
  const { t } = useTranslation('translation')
  const { user } = useSelector(state => state.user)

  let { firstName, secondName, amount } = user

  return (
    <div className="sidebar">
      <h2>{`Your balance: ${amount}$`} </h2>

      <div className="sidebar__nav">
        <SidebarOption
          to={'/user-page'}
          text={`${firstName} ${secondName}`}
          src=""
        />
        <SidebarOption to={'/user-page'} text={t('Messenger')} src="" />
        <SidebarOption to={'/user-page'} text={t('Watch')} src="" />
        <SidebarOption to={'/user-page'} text={t('Gallery')} src="" />
      </div>
    </div>
  )
}

export default Sidebar
