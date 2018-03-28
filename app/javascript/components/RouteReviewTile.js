import React from 'react';
import { browserHistory, Link } from 'react-router';

const RouteReviewTile = (props) => {
  return(
    <div className="one-third column">
      <h1> Hello is there any data?</h1>
        <div id="tilecontainer" className="route-review-tile">
            <div className="route-information">
              <ul>
                <li>Name: {props.name}</li>
                <li>Desc: {props.description}</li>
                <li>UserId: {props.user_id}</li>
                <li>Mileage: {props.mileage}</li>
                <li>Category: {props.category}</li>
                <li>Weather Day of Ride: {props.weatherconditions}</li>
                <li>Pts Interest: {props.points_interest}</li>
                <li>Start: {props.start_location}</li>
                <li>End: {props.end_location}</li>

              </ul>
            </div>
           </div>
         </div>

  )
}

export default RouteReviewTile;
