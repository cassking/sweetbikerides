import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import {Redirect,  IndexRoute, Router, browserHistory, Link } from 'react-router'
import RouteReviewFormContainer from './containers/RouteReviewFormContainer'
import RouteReviewShowContainer from './containers/RouteReviewShowContainer'
import NavBar from './components/NavBar';
import IndexContainer from './containers/IndexContainer'

const App = props => {
  return (

    <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
       <IndexRoute  component={IndexContainer} />
       <Route path="route_reviews/:id" component={RouteReviewShowContainer} />
        <Route path='/add-review' component={RouteReviewFormContainer} />
      </Route>
    </Router>

  )
}
export default App;