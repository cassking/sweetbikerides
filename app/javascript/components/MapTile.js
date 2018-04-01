import React from 'react';
import { Route, IndexRoute, Router, browserHistory, hashHistory, Link } from 'react-router'
import ReactMapboxGl, { Layer, Feature, ZoomControl, GeolocateControl } from "react-mapbox-gl";
import { geoData } from '../Constants';
const accessToken = "pk.eyJ1IjoiY2Fzc2tpbmciLCJhIjoiY2plcnRzaDJiMDAxYzJ2bnZ0OGU3dnB3OSJ9.kUHTVfObT_1gNrIdQM6eIQ"
const gpxfile = 'https://openlayers.org/en/v4.6.5/examples/data/gpx/fells_loop.gpx'
let file = gpxfile;

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
        zoom={props.zoomLevel}
        animated={props.animated}
        interactive='true'
        showUserLocation={props.showUserLocation}
        containerStyle={{
          height: "90vh",
          width: "90vw"
        }}

        center={props.center}
        >
        <Layer
          type="line"
          layout={lineLayout}
          paint={linePaint}>
          <Feature coordinates={props.coordinates}/>
        </Layer>

    </Map>
  </div>

  )
}

export default MapTile;
