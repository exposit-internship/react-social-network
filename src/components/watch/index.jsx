import SidebarOption from '../home/sidebar-option'

import { FAKE_ROUTE, WATCH_ROUTE } from '../../constants/routs'

import './index.scss'
import OriginalShows from './pages/original-shows'


function Watch() {
  return (
    <div className="watch">
      <div className="watch__sidebar">
        <SidebarOption to={WATCH_ROUTE} text="Главная" />
        <SidebarOption to={FAKE_ROUTE} text="Original Films" />
      
      </div>
      <div className="watch__content">
        <OriginalShows />
      </div>
    </div>
  )
}

export default Watch
