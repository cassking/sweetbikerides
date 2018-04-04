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
      lng: -75.163685,
      lat: 39.952345,
      center: center, // starting position
      zoom: 12,
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
      map.on('click', function (e) {
          document.getElementById('info').innerHTML =
              // e.point is the x, y coordinates of the mousemove event relative
              // to the top-left corner of the map
              JSON.stringify(e.point) + '<br />' +
              // e.lngLat is the longitude, latitude geographical position of the event
              JSON.stringify(e.lngLat);
      });
      map.on('click', () => {
        // const { lng, lat } = map.getCenter();
        const{ map_start_latitude, map_start_longitude} = map.getCenter();
        alert(  this.state.map_start_latitude,this.state.  map_start_longitude )

        this.setState({
          map_start_latitude: lng.toFixed(4),
          map_start_longitude: lat.toFixed(4),
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
</Map>  */}
         <span>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</span>

      <div ref={Map => this.mapContainer = Map}  /></div>


    );
  }
}
export default MapInFormContainer;
