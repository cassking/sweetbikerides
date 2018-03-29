import React from 'react';
import { Route, IndexRoute, Router, browserHistory, hashHistory, Link } from 'react-router'

const NavBar = props => {
  return (
  <div className="container">
    <div className="row">
      <div className="column">
        <button className="back-button" onClick={browserHistory.goBack}> Back </button>
        <Link to='/add_review'><button className="add-review">Add Review</button></Link>
        { props.children }
      </div>
    </div>
  </div>
  )
}

export default NavBar;
