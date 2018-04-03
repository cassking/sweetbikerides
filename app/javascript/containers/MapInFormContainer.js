import React from 'react';
import ReactMapboxGl, {ScaleControl,ZoomControl,RotationControl,Layer,Feature } from "react-mapbox-gl";
const accessToken = "pk.eyJ1IjoiY2Fzc2tpbmciLCJhIjoiY2plcnRzaDJiMDAxYzJ2bnZ0OGU3dnB3OSJ9.kUHTVfObT_1gNrIdQM6eIQ";
import mapboxgl from 'mapbox-gl'

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
      lng: 5,
    lat: 34,
      center: center, // starting position
      zoom: 9,
      map_start_latitude:0,
      map_start_longitude:0,
      map_start_latitude:0,
      map_end_latitude:0 // starting zoom
    }
    this.getCoordinatesOnClick=this.getCoordinatesOnClick.bind(this)
  }

  componentDidMount() {
      const { lng, lat, zoom } = this.state;
mapboxgl.accessToken = accessToken;

      const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [lng, lat],
        zoom
      });

      map.on('click', () => {
        const { lng, lat } = map.getCenter();

        this.setState({
          lng: lng.toFixed(4),
          lat: lat.toFixed(4),
          zoom: map.getZoom().toFixed(2)
        });
      });

      map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }));

    map.addControl(new MapboxDirections({
    accessToken: accessToken
  }), 'top-left');
    }
getCoordinatesOnClick(map, e){
  document.getElementById('info').innerHTML =
    JSON.stringify(e.lngLat["lat"]) + '<br />' +
  JSON.stringify(e.lngLat["lng"]);
}


  render() {
    const { lng, lat, zoom } = this.state;
    const dStyle = {
      position: 'relative',
      width: '400px',
      height: '400px'
    };
    return (
      <div>
        <pre id='info'></pre>
      {/* <Map
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
</Map> */}
         <span>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</span>

      <div ref={el => this.mapContainer = el}  /></div>


    );
  }
}
export default MapInFormContainer;
