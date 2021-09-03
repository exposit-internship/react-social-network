import { useTranslation } from 'react-i18next'

import { SidebarOption } from '../internal'
import OriginalShows from './pages/original-shows'

import { WATCH_ROUTE } from '../../constants/routs'

import './index.scss'

const Watch = () => {
  const { t } = useTranslation('translation')

  return (
    <div className="watch">
      <div className="watch__sidebar">
        <SidebarOption to={WATCH_ROUTE} text={t('watch.originalShows')} />
      </div>
      <div className="watch__content">
        <OriginalShows />
      </div>
    </div>
  )
}

export default Watch
