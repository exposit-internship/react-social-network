import { useTranslation } from 'react-i18next'
import { USER_PAGE_ROUTE } from '../../../constants/routs'

import { useTheme } from '../../../context/test/test-state'

import classNames from 'classnames'

import SidebarOption from '../sidebar-option'

import './index.scss'

const Sidebar = () => {
  const { t } = useTranslation('translation')

  const user = JSON.parse(localStorage.getItem('user'))
  let { firstName, secondName, amount } = user
  const { changeThemeToDark } = useTheme()
  return (
    <div className={classNames('sidebar', { darkmode: changeThemeToDark })}>
      <h2>{`${t('yourBalance')}: ${amount}$`} </h2>
      <div className="sidebar__nav">
        <SidebarOption
          to={USER_PAGE_ROUTE}
          text={`${firstName} ${secondName}`}
          src=""
        />
        <SidebarOption to={USER_PAGE_ROUTE} text={t('Watch')} src="" />
        {/* <SidebarOption to={USER_PAGE_ROUTE} text={t('Messenger')} src="" /> */}

        {/* <SidebarOption to={USER_PAGE_ROUTE} text={t('Gallery')} src="" /> */}
      </div>
    </div>
  )
}

export default Sidebar
