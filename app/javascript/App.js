import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import MapBox from './components/MapBox'
const App = props => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
       <IndexRoute component={MapBox} />
        <Route path="/users/sign_in" />
      </Route>
    </Router>
  )
}

export default App;
