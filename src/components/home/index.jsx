import Posts from './posts'
import Sidebar from './sidebar'

import './index.scss'

const Home = () => (
  <div className="home">
    <Sidebar />
    <Posts />
    <div className="widgets"></div>
  </div>
)

export default Home
