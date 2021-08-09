import React from 'react'
import { useTranslation } from 'react-i18next'

import SidebarOption from '../sidebar-option'

import './index.scss'

const Sidebar = () => {
  const { t } = useTranslation('translation')

  // const user = JSON.parse(localStorage.getItem('user'))
  // const { firstName, secondName } = user

  return (
    <div className="sidebar">
      <h1>Your menu</h1>
      <div className="sidebar__nav">
        <SidebarOption
          to={'/user-page'}
          text={'`${firstName} ${secondName}`'}
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
