import React from 'react'
import SidebarOption from '../sidebar-option'
import './index.scss'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>Sidebar</h1>

      <div className="sidebar__nav">
        <SidebarOption to={'/user-page'} text="Ilia white" src="" />
        <SidebarOption to={'/user-page'} text="Covid" src="" />
        <SidebarOption to={'/user-page'} text="Messenger" src="" />
        <SidebarOption to={'/user-page'} text="Watch" src="" />
        <SidebarOption to={'/user-page'} text="Something" src="" />
      </div>
    </div>
  )
}

export default Sidebar
