import React from 'react';
import { Route, Point, IndexRoute, Router, browserHistory, hashHistory, Link } from 'react-router'
import ReactMapboxGl, { Layer, Feature, ZoomControl, GeolocateControl } from "react-mapbox-gl";
import { geoData } from '../Constants';
const accessToken = "pk.eyJ1IjoiY2Fzc2tpbmciLCJhIjoiY2plcnRzaDJiMDAxYzJ2bnZ0OGU3dnB3OSJ9.kUHTVfObT_1gNrIdQM6eIQ"


const style= "mapbox://styles/cassking/cjfo37dix2c7b2rpox8oue0uf"
const Map = ReactMapboxGl({
  accessToken
});
const containerStyle = {
  // height: '70vh',
  // width: '70vw'
};

const lineLayout = {
  'line-cap': 'round',
  'line-join': 'round'
};

const linePaint = {
  'line-color': '#4790E5',
  'line-width': 12
};



const MapTile = (props) => {
    return (
      <div>
      <Map
          style={style}
          showsUserLocation={true}
          userLocationVisible={true}
          containerStyle={containerStyle }
          center={props.center}>
        <Layer  type="line" layout={lineLayout} paint={linePaint}>
          <Feature coordinates={props.mappedRoute}  />
        </Layer>
      </Map>
      <h4>More information, if available:</h4>
       <ul className="route-details">
       <li><span>Mileage/distance:</span> {props.mileage} miles</li>
       <li><span>Start Address:</span> {props.start_location}</li>
       <li><span>Ending Address:</span> {props.end_location}</li>
       {/* {rideDirections} */}
       </ul>
       </div>

    );
}

 export default MapTile;
