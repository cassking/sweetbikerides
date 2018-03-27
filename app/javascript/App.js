import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import MapContainer from './containers/MapContainer'
const App = props => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={MapContainer}>
       <IndexRoute component={MapContainer} />
      </Route>
    </Router>
  )
}

export default App;
