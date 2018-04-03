import React from 'react';
import ReactMapboxGl, {ScaleControl,ZoomControl,RotationControl,Layer,Feature } from "react-mapbox-gl";
const accessToken = "pk.eyJ1IjoiY2Fzc2tpbmciLCJhIjoiY2plcnRzaDJiMDAxYzJ2bnZ0OGU3dnB3OSJ9.kUHTVfObT_1gNrIdQM6eIQ";

const style= "mapbox://styles/mapbox/outdoors-v10"
const Map = ReactMapboxGl({
  accessToken
});

let mymap = Map
const containerStyle = {
  height: '70vh',
  width: '70vw'
};
const center = [-75.163685, 39.952345]
const lineLayout = {
  'line-cap': 'round',
  'line-join': 'round'
};

const linePaint = {
  'line-color': '#4790E5',
  'line-width': 12
};
let map = Map
class MapInFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: center, // starting position
      zoom: 9,
      map_start_latitude:0,
      map_start_longitude:0,
      map_start_latitude:0,
      map_end_latitude:0 // starting zoom
    }
    this.getCoordinatesOnClick=this.getCoordinatesOnClick.bind(this)
  }


getCoordinatesOnClick(map, e){
  document.getElementById('info').innerHTML =
  JSON.stringify(e.lngLat);
}


  render() {
    return (
      <div><pre id='info'></pre>
      <Map
        onClick={this.getCoordinatesOnClick}
        // onMouseOver={this.getCoordinatesOnClick}
        zoomLevel={this.state.zoomLevel}
        style={style}
        showsUserLocation={true}
        userLocationVisible={true}
        containerStyle={containerStyle }
        center={this.state.center}>
      <Layer  type="line" layout={lineLayout} paint={linePaint}>
        <Feature coordinates={this.state.mappedRoute}  />
      </Layer>
</Map>
</div>

    );
  }
}
export default MapInFormContainer;
