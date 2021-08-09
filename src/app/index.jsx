import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home, Header, UserPage } from '../components'
import Login from '../auth/login'
import Register from '../auth/register'
import { isLoggedInUser } from '../store/auth/action'

import './index.scss'

const App = () => {
  
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (!auth.authenticated) {
      dispatch(isLoggedInUser())
    }
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/user-page" component={UserPage} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
export default App
