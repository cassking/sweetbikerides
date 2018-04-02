import React from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
const accessToken = "pk.eyJ1IjoiY2Fzc2tpbmciLCJhIjoiY2plcnRzaDJiMDAxYzJ2bnZ0OGU3dnB3OSJ9.kUHTVfObT_1gNrIdQM6eIQ"
import L from 'leaflet';
import { Popup, Circle,FeatureGroup,LayerGroup,LayersControl,Marker,Rectangle,TileLayer } from 'react-leaflet';

const gpxfile = 'https://openlayers.org/en/v4.6.5/examples/data/gpx/fells_loop.gpx'

const Map = ReactMapboxGl({
  accessToken: accessToken
});
class MapInFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLocation: false,
       latlng: {
         lat: 51.505,
         lng: -0.09,
       },
      }
this.handleClick=this.handleClick.bind(this)
this.handleLocationFound =this.handleLocationFound.bind(this)
  }
  handleClick = () => {
      this.refs.map.leafletElement.locate()
    }

    handleLocationFound = e => {
      this.setState({
        hasLocation: true,
        latlng: e.latlng,
      })
    }
  componentDidMount() {
     // create the Leaflet map object
      Map.fitBounds(omnivore.gpx(gpxfile).getBounds());
   }


  render() {
    const marker = this.state.hasLocation ? (
          <Marker position={this.state.latlng}>
            <Popup>
              <span>You are here</span>
            </Popup>
          </Marker>
        ) : null

    return(
      <div>
        <Map
        center={this.state.latlng}
        length={4}
        onClick={this.handleClick}
        onLocationfound={this.handleLocationFound}
        ref="map"
        zoom={13}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {marker}
      </Map>
      </div>
    )
  }
}
export default MapInFormContainer;
