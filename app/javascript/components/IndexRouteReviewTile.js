import React from 'react';
import { Route, IndexRoute, Router, browserHistory, hashHistory, Link } from 'react-router'
import MapTile from './MapTile'

const IndexRouteReviewTile = (props) => {

  return(
    <div className="one-third column">

        <div id="tilecontainer" className="route-review-tile">
            <div className="route-information">
            <h3>
              <Link to={`/route_reviews/${props.id}`}>
              <img className="avatar" src="/images/map-icon.png" alt="avatar" />
              {props.name}
              </Link>
            </h3>
            <ul className="route-details">
                <li><span>Description:</span> {props.description}</li>
                <li><span>Category:</span> {props.category}</li>
              </ul>
            </div>
           </div>
         </div>

  )
}

export default IndexRouteReviewTile;
