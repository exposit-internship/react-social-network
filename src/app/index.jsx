import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Login from '../auth/login'
import Register from '../auth/register'
import Header from '../components/header'
import Home from '../components/home'
import UserPage from '../components/user-page'
import { isLoggedInUser } from '../store/auth/action'

import './index.scss'

const App = () => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (!auth.authentecated) {
      dispatch(isLoggedInUser())
    }
  },[])

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/userPage" component={UserPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
export default App
