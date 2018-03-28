import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import {Redirect,  IndexRoute, Router, browserHistory, Link } from 'react-router'
import MapContainer from './containers/MapContainer'
import NavBar from './components/NavBar';
import IndexContainer from './containers/IndexContainer'
const App = props => {
  return (

    <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
       <IndexRoute  component={IndexContainer} />
        <Route path='/mapcontainer' component={MapContainer} />
      </Route>
    </Router>

  )
}
export default App;
