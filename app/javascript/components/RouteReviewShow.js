import React, { Component } from 'react';
import { Route, IndexRoute, Router, browserHistory, hashHistory, Link } from 'react-router'
import MapTile from './MapTile'
import { categoriesDifficulty } from '../Categories';
import { geoData } from '../Constants';

const RouteReviewShow = (props) => {
  return(
    <div className="route-review-show">
      <h2>{props.name}</h2>
      <div className="map-holder">
        <MapTile
            coordinates={props.coordinates}
            center={props.center}
          />
        </div>
      <div className="map-info-holder">
        <ul className="route-details">
        <li><span>Name:</span> {props.name}</li>
        <li><span>Description</span> {props.description}</li>
        <li><span>Mileage: </span>{props.mileage}</li>
        <li><span>Category:</span> {props.category} | <span>Difficulty:</span> {props.difficulty}</li>
        <li><span>Start location:</span> {props.start_location} | <span>End location:</span> {props.end_location}</li>
        <li><span>Notes on points of interest:</span> {props.points_interest}</li>
      </ul>
    </div>

    </div>
  )
}

export default RouteReviewShow;
