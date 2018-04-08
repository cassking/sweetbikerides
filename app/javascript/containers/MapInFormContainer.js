import React from 'react';
import ReactMapboxGl, {ScaleControl,ZoomControl,RotationControl,Layer,Feature } from "react-mapbox-gl";
const accessToken = "pk.eyJ1IjoiY2Fzc2tpbmciLCJhIjoiY2plcnRzaDJiMDAxYzJ2bnZ0OGU3dnB3OSJ9.kUHTVfObT_1gNrIdQM6eIQ";
import mapboxgl from 'mapbox-gl'

const style= "mapbox://styles/cassking/cjfo37dix2c7b2rpox8oue0uf"

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

class MapInFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [0,0],
      zoom: 12,
      map_start_lng_lat:[],
      map_end_lng_lat:[] ,
      route:{}// starting zoom
    }
    this.handleClick=this.handleClick.bind(this)
    this.handleValidateMap_start_lng_latChange=this.handleValidateMap_start_lng_latChange.bind(this)
    this.handleValidateMap_end_lng_latChange=this.handleValidateMap_end_lng_latChange.bind(this)
  }

  handleValidateMap_start_lng_latChange(e){
    this.validateField(e.target.value, { map_start_lng_lat: 'Please click on map to get starting coordinates' } )
  }
  handleValidateMap_end_lng_latChange(e){
    this.validateField(e.target.value, { map_end_lng_lat: 'Please click on map to get ending coordinates' } )
  }

  handleClick(e){
      e.preventDefault();
      let originParent = document.getElementById("mapbox-directions-origin-input");
      let originInputField = originParent.getElementsByTagName('input')[0]
      let destinationParent = document.getElementById("mapbox-directions-destination-input");
      let destinationInputField = destinationParent.getElementsByTagName('input')[0];
      let destination = destinationInputField.value
      let arrDestination = destination.split(",").map(Number);
      let origin = originInputField.value
      let arrOrigin = origin.split(",").map(Number);


      this.setState({
        map_start_lng_lat:  arrOrigin,
        map_end_lng_lat:    arrDestination
      });
      this.props.handleStartCoordinatesChange(arrOrigin);
      this.props.handleEndCoordinatesChange(arrDestination);
  }
  componentDidMount() {
      const { lng, lat, zoom } = this.state;
      mapboxgl.accessToken = accessToken;
      const geojson = {
          "type": "FeatureCollection",
          "features": []
      };
      const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/cassking/cjfo37dix2c7b2rpox8oue0uf',
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
      profile: 'cycling',

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
      <div ref={Map => this.mapContainer = Map} onClick={this.handleClick}  />
        <label className="col-3">Starting Longitude/Latitude
        (the field is automatically populated by clicking on map at the start point)
      </label>
          <div className="col-9">
            <input
              value={this.state.map_start_lng_lat}
              name="map_start_lng_lat"
              type="text"
              id="map_start_lng_lat"
              className="form-control"
              required
            />
          </div>

            <label className="col-3">Ending Longitude/Latitude
          (the field is automatically populated by clicking on map at the end point)
        </label>
              <div className="col-9">
                <input
                  value={this.state.map_end_lng_lat}
                  name="map_end_lng_lat"
                  type="text"
                  id="map_end_lng_lat"
                  className="form-control"
                  required
                />
              </div>
      </div>

    );
  }
}
export default MapInFormContainer;
