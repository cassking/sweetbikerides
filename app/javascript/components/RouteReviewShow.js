import React, { Component } from 'react';
import { Route, IndexRoute, Router, browserHistory, hashHistory, Link } from 'react-router'
import MapTile from './MapTile'
import { categoriesDifficulty } from '../Categories';
import { geoData } from '../Constants';

const RouteReviewShow = (props) => {
  return(
    <div className="route-review-show">
      <h2>{props.name}</h2>
      <ul className="route-details">
        <li>ROUTE REVIEW SHOW HERE, ONE ROUTE, ONE USERNAME, ONE MAP, CO</li>
        <li><MapTile
              coordinates={props.coordinates}
              center={props.center}
            />
        </li>

      </ul>
    </div>
  )
}

export default RouteReviewShow;
