import React from 'react';
import { Route, Point, IndexRoute, Router, browserHistory, hashHistory, Link } from 'react-router'
import ReactMapboxGl, { Layer, Feature, ZoomControl, GeolocateControl } from "react-mapbox-gl";
// import { geoData } from '../Constants';
const accessToken = "pk.eyJ1IjoiY2Fzc2tpbmciLCJhIjoiY2plcnRzaDJiMDAxYzJ2bnZ0OGU3dnB3OSJ9.kUHTVfObT_1gNrIdQM6eIQ"


const style= "mapbox://styles/cassking/cjfo37dix2c7b2rpox8oue0uf"
const Map = ReactMapboxGl({
  accessToken
});


const lineLayout = {
  'line-cap': 'round',
  'line-join': 'round'
};

const linePaint = {
  'line-color': '#4790E5',
  'line-width': 12
};

const MapTile = (props) => {
  let instructions = props.instructions
  let rideDirections = instructions.map( (each_maneuver_info) =>{
  let convertedDist = each_maneuver_info.distance
  let finalConvertedDIst = parseFloat(convertedDist*0.000621371192).toFixed(2)
  if (each_maneuver_info.name === ""){
    each_maneuver_info.name = "street name not available"
  }
return (
  <div>
    <li><span>distance of this leg:</span> {finalConvertedDIst} </li>
    <li><span>street:</span> {each_maneuver_info.name}</li>
    <li><span>turn instruction:</span>{each_maneuver_info.maneuver.instruction}</li>
    <li><span>...</span></li>

  </div>

  )

})
    return (
      <div>
      <Map
          style={style}
          showsUserLocation={true}
          userLocationVisible={true}
          center={props.center}>
        <Layer  type="line" layout={lineLayout} paint={linePaint}>
          <Feature coordinates={props.mappedRoute}  />
        </Layer>
      </Map>
      <h4>More information, if available:</h4>
       <ul className="route-details">
        <li><span>SUMMARY OF ROUTE:</span> {props.summary}</li>

       <li><span>Mileage/distance:</span> {props.mileage} miles</li>
       <li><span>Start Address:</span> {props.start_location}</li>
       <li><span>Ending Address:</span> {props.end_location}</li>
       <li><h4>Turn-by-turn directions:</h4></li>
        <button onClick={props.toggleShowHide}>Click to show/hide turn-by-turn directions</button>
        { props.shown ? <div>{rideDirections}</div> : null }
       </ul>
       </div>

    );
}

 export default MapTile;
