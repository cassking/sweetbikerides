import React from 'react';
import { Route, IndexRoute, Router, browserHistory, hashHistory, Link } from 'react-router'
import ReactMapboxGl, { Layer, Feature, ZoomControl, GeolocateControl } from "react-mapbox-gl";
import { geoData } from '../Constants';
const accessToken = "pk.eyJ1IjoiY2Fzc2tpbmciLCJhIjoiY2plcnRzaDJiMDAxYzJ2bnZ0OGU3dnB3OSJ9.kUHTVfObT_1gNrIdQM6eIQ"
const routeCoordinates =[
[-84.518399,39.134126],[-84.51841,39.133781],[-84.520091,39.133389],[-84.520497,
39.131655],[-84.520852,39.128039],[-84.52036,39.127901],[-84.52094,39.122783],
[-84.52022,39.122713],[-84.520768,39.120841],[-84.519639,39.120268],
[-84.513743,39.115317],[-84.514554,39.114744],[-84.514307,39.114531],
[-84.514551,39.114249],[-84.511692,39.102682],[-84.511987,39.102638]
]
const Map = ReactMapboxGl({
  accessToken: accessToken
  });

const lineLayout = {
  'line-cap': 'round',
  'line-join': 'round'
};

const linePaint = {
  'line-color': '#4790E5',
  'line-width': 12
};

const layerStyles = {
  route: {
    lineColor: '#01c0ff',
    lineWidth: 5,
    lineOpacity: 0.3,
  },
};

const MapTile = (props) => {
  return(
    <div className="mapTile">
      <Map
        accessToken={accessToken}
        style="mapbox://styles/cassking/cjfachvt46kps2sob2eqponl6"
        zoomLevel={[16]}
        animated={props.animated}
        interactive='true'
        userLocationVisible={props.userLocationVisible}
        showUserLocation={props.showUserLocation}
        containerStyle={{
          height: "90vh",
          width: "90vw"
        }}

        center={routeCoordinates[0]}
        >
        <Layer
          type="line"
          layout={lineLayout}
          paint={linePaint}>
          <Feature coordinates={routeCoordinates}/>
        </Layer>

    </Map>
  </div>

  )
}

export default MapTile;
