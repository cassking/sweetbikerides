import React from 'react';
import { Route, Point, IndexRoute, Router, browserHistory, hashHistory, Link } from 'react-router'
import ReactMapboxGl, { Layer, Feature, ZoomControl, GeolocateControl } from "react-mapbox-gl";
import { geoData } from '../Constants';
const accessToken = "pk.eyJ1IjoiY2Fzc2tpbmciLCJhIjoiY2plcnRzaDJiMDAxYzJ2bnZ0OGU3dnB3OSJ9.kUHTVfObT_1gNrIdQM6eIQ"
const mappedRoute =[
[-84.518399,39.134126],[-84.51841,39.133781],[-84.520091,39.133389],[-84.520497,
39.131655],[-84.520852,39.128039],[-84.52036,39.127901],[-84.52094,39.122783],
[-84.52022,39.122713],[-84.520768,39.120841],[-84.519639,39.120268],
[-84.513743,39.115317],[-84.514554,39.114744],[-84.514307,39.114531],
[-84.514551,39.114249],[-84.511692,39.102682],[-84.511987,39.102638]
]

const style= "mapbox://styles/mapbox/streets-v10"

const Map = ReactMapboxGl({
  accessToken
});
const containerStyle = {
  height: '70vh',
  width: '70vw'
};

const lineLayout = {
  'line-cap': 'round',
  'line-join': 'round'
};

const linePaint = {
  'line-color': '#4790E5',
  'line-width': 12
};
//const mappedRoute = route.points.map( point => [point.lat, point.lng]);
//const route2 = 'https://api.mapbox.com/directions/v5/mapbox/cycling/-84.518641,39.134270;-84.512023,39.102779?geometries=geojson&access_token=pk.eyJ1IjoiY2Fzc2tpbmciLCJhIjoiY2plcnRzaDJiMDAxYzJ2bnZ0OGU3dnB3OSJ9.kUHTVfObT_1gNrIdQM6eIQ'

const MapTile = (props) => {
    return (
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

    );

}

 export default MapTile;
