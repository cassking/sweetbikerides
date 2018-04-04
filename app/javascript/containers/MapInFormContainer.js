import React from 'react';
import ReactMapboxGl, {ScaleControl,ZoomControl,RotationControl,Layer,Feature } from "react-mapbox-gl";
const accessToken = "pk.eyJ1IjoiY2Fzc2tpbmciLCJhIjoiY2plcnRzaDJiMDAxYzJ2bnZ0OGU3dnB3OSJ9.kUHTVfObT_1gNrIdQM6eIQ";
import mapboxgl from 'mapbox-gl'

const style= "mapbox://styles/mapbox/outdoors-v10"
const Map = ReactMapboxGl({
  accessToken
});

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
      center: [0,0],
      zoom: 12,
      map_start_lng_lat:0,
      map_end_lng_lat:0 ,
      route:{}// starting zoom
    }
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(e){
      let originParent = document.getElementById("mapbox-directions-origin-input");
      let originInputField = originParent.getElementsByTagName('input')[0]
      let destinationParent = document.getElementById("mapbox-directions-destination-input");
      let destinationInputField = destinationParent.getElementsByTagName('input')[0];
      this.setState({
        map_start_lng_lat:  originInputField.value,
        map_end_lng_lat:    destinationInputField.value
      });
  }
  componentDidMount() {
      const { lng, lat, zoom } = this.state;
      mapboxgl.accessToken = accessToken;

      const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v9',
        center: center,
        zoom
      });
    map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }));
    map.addControl(new MapboxDirections({
    //example route object
//       {
//     "duration": 88.4,
//     "distance": 830.4,
//     "weight": 88.4,
//     "weight_name": "routability",
//     "geometry": "oklyJ`{ph@yBuY_F{^_FxJoBrBs@d@mAT",
//     "legs": [ ],
//     "voiceLocale": "en"
// }
      accessToken: accessToken
      }), 'top-left');
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

         <span>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</span>

      <div ref={Map => this.mapContainer = Map} onClick={this.handleClick}  />

        <label className="col-3">Starting Longitude/Latitude</label>
          <div className="col-9">
            <input
              value={this.state.map_start_lng_lat}
              name="map_start_lng_lat"
              type="text"
              id="map_start_lng_lat"
              className="form-control"
            />
          </div>
            <label className="col-3">Ending Longitude/Latitude</label>
              <div className="col-9">
                <input
                  value={this.state.map_end_lng_lat}
                  name="map_end_lng_lat"
                  type="text"
                  id="map_end_lng_lat"
                  className="form-control"
                />
              </div>
      </div>

    );
  }
}
export default MapInFormContainer;
