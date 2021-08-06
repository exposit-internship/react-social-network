import './index.scss'
import Posts from './posts'
import Sidebar from './sidebar'

const Home = () => (
  <div className="home">
    <Sidebar />
    <Posts />
    <div className="widgets">Widgets</div>
  </div>
)

export default Home
