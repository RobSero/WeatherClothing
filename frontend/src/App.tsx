import React from 'react'
import ApolloClient from 'apollo-boost'
import {ApolloProvider }from 'react-apollo'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import HomePage from './components/homePage/HomePage'
import ShowPage from './components/showPage/ShowPage'

const client = new ApolloClient({
  uri: 'http://localhost:5000/api/graphql'
})

const App = () => {
  return (
    <ApolloProvider client={client}>
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/:id' component={ShowPage} />
    </Switch>
    </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
