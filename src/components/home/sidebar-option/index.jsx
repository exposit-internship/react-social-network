import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { useTheme } from '../../../context/test/test-state'
import './index.scss'

const SidebarOption = ({ to, text, src, alt }) => {
  const { changeThemeToDark } = useTheme()
  return (
    <div className="sidebar__option">
      <Link to={to} className={classNames({ color__light: changeThemeToDark })}>
        <img src={src} alt={alt} />
        <h3>{text}</h3>
      </Link>
    </div>
  )
}

export default SidebarOption
