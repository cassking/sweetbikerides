import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import MapContainer from './containers/MapContainer'
import NavBar from './components/NavBar';
import IndexContainer from './containers/IndexContainer'
const App = props => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
       <IndexRoute container={IndexContainer} />
        <Route path="/" container={MapContainer} />
      </Route>
    </Router>
  )
}

export default App;
