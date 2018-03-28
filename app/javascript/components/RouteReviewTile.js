import React from 'react';
import { Route, IndexRoute, Router, browserHistory, hashHistory, Link } from 'react-router'
import MapTile from './MapTile'

const RouteReviewTile = (props) => {
  return(
    <div className="one-third column">

        <div id="tilecontainer" className="route-review-tile">
            <div className="route-information">
            <h3>  <Link to={`/route_reviews/${props.id}`}>{props.name}</Link></h3>
              <ul className="route-details">
                <li>Desc: {props.description}</li>
                <li>Mileage: {props.mileage}</li>
                <li>Category: {props.category}</li>
                <li><MapTile
                      coordinates={props.coordinates}/>
                    </li>

              </ul>
            </div>
           </div>
         </div>

  )
}

export default RouteReviewTile;
