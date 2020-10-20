import React from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import HomePage from './components/homePage/HomePage'

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={HomePage} />
    </Switch>
    </BrowserRouter>
  )
}

export default App
