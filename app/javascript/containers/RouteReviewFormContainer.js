import React, { Component } from 'react';
import { Route, IndexRoute, Router, browserHistory, hashHistory, Link } from 'react-router'
import ReactMapboxGl, { Layer, Feature, ZoomControl } from "react-mapbox-gl";
import DropdownMenu from 'react-dd-menu';
const accessToken = "pk.eyJ1IjoiY2Fzc2tpbmciLCJhIjoiY2plcnRzaDJiMDAxYzJ2bnZ0OGU3dnB3OSJ9.kUHTVfObT_1gNrIdQM6eIQ"

class RouteReviewFormContainer extends Component {

  constructor(props) {
    mapboxgl.accessToken = accessToken;

    super(props);
    this.state = {
      // GeoJSON object to hold our measurement features

      geojson: {
          "type": "FeatureCollection",
          "features": []
      },//end geojson obj
      // Used to draw a line between points

      linestring : {
          "type": "Feature",
          "geometry": {
              "type": "LineString",
              "coordinates": []
          }
      }//end linestring obj

    }//end state

  }

  validateSignedIn(signed_in) {
      if (signed_in === false) {
        let newError = { SignIn: 'User must be signed in.' }
        this.setState({ errors: Object.assign(this.state.errors, newError) })
        return false
      } else {
        let errorState = this.state.errors
        delete errorState.SignIn
        this.setState({ errors: errorState })
        return true
      }
    }
      render() {
        return (
          <div> <p>RouteReviewFormContainer</p> </div>
        )
      }

}

export default RouteReviewFormContainer;
