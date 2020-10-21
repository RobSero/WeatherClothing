import React from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import HomePage from './components/homePage/HomePage'
import ShowPage from './components/showPage/ShowPage'

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/:id' component={ShowPage} />
    </Switch>
    </BrowserRouter>

  )
}

export default App
