import React from 'react';
import { Route, IndexRoute, Router, browserHistory, hashHistory, Link } from 'react-router'
import ReactMapboxGl, { Layer, Feature, ZoomControl } from "react-mapbox-gl";
import { geoData } from '../Constants';
const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiY2Fzc2tpbmciLCJhIjoiY2plcnRzaDJiMDAxYzJ2bnZ0OGU3dnB3OSJ9.kUHTVfObT_1gNrIdQM6eIQ"
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
  return(
    <div className="mapTile">
      <Map
        style="mapbox://styles/cassking/cjfachvt46kps2sob2eqponl6"
        zoom={[8]}
        interactive='true'
        containerStyle={{
          height: "50vh",
          width: "50vw"
        }}
        center={props.coordinates[0]}
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
