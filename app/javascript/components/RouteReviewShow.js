import React, { Component } from 'react';
import { Route, IndexRoute, Router, browserHistory, hashHistory, Link } from 'react-router'
import MapTile from './MapTile'
import { categoriesDifficulty } from '../Categories';
// import { geoData } from '../Constants';

const RouteReviewShow = (props) => {

  return(
    <div className="route-review-show">
      <h2>{props.name}</h2>
      <div className="map-holder">
        <MapTile
            coordinates={props.coordinates}
            center={props.center}
            map_end_lng_lat={props.map_end_lng_lat}
            map_start_lng_lat={props.map_start_lng_lat}

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
      <p><img className="avatar" src="/images/cycle-avatar.png" alt="avatar" />
        <span className="review-user-info">Created by: </span>
        <span className="posted-by-username">{props.username}</span>
        <br />
        <span className="review-user-info">Little bit about myself: </span>
        <span className="posted-by-username">{props.bio}</span>
        <br />
        <span className="review-user-info">Where I do most of my riding: </span>
        <span className="posted-by-username">{props.location}</span>

    </p>
    </div>

    </div>
  )
}

export default RouteReviewShow;
