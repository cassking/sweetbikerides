import React from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
const accessToken = "pk.eyJ1IjoiY2Fzc2tpbmciLCJhIjoiY2plcnRzaDJiMDAxYzJ2bnZ0OGU3dnB3OSJ9.kUHTVfObT_1gNrIdQM6eIQ"


const MapInFormContainer = ReactMapboxGl({
  accessToken: accessToken;
});

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pieceOfState: null,
      anotherPiece: []
    }
    this._getLatLong = this._getLatLong.bind(this)
  }
  _getLatLong(map, event) {
    console.log(event.lngLat)
    if (this.props.setCoordinates){
      this.props.setCoordinates(event.lngLat)
    }
  }

  render() {
    return(
      <div>
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: this.props.height,
            width: this.props.width
          }}
          center={[this.props.lng, this.props.lat]}
          onClick={this._getLatLong}
          >
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-11"}}
            >
            <Feature coordinates={[this.props.lng, this.props.lat]}/>
          </Layer>
        </Map>
      </div>
    )
  }
}
export default MapInFormContainer;
