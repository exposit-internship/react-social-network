import Posts from './posts'
import Sidebar from './sidebar'

import './index.scss'

const Home = () => (
  <div className="home">
    <Sidebar />
    <Posts />
    <div className="widgets">Widgets</div>
  </div>
)

export default Home
