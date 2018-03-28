import React from 'react'
import { Route,  IndexRoute, Router, browserHistory, Link } from 'react-router'
import MapContainer from './containers/MapContainer'
import NavBar from './components/NavBar';
import IndexContainer from './containers/IndexContainer'
const App = props => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
       <IndexRoute  component={IndexContainer} />
       {/* <Route path='/add_route_review' component={RouteReviewFormContainer} /> */}
        <Route path='/mapcontainer' component={MapContainer} />
      </Route>
    </Router>

  )
}
export default App;
