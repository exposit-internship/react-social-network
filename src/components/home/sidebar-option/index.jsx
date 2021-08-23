import { Link } from 'react-router-dom'

import './index.scss'

const SidebarOption = ({ to, text, src, alt }) => (
  <div className="sidebar__option">
    <Link to={to}>
      <img src={src} alt={alt} />
      <h3>{text}</h3>
    </Link>
  </div>
)

export default SidebarOption
