import React from 'react';
import ReactMapboxGl, {Layer, Feature } from "react-mapbox-gl";
const accessToken = "pk.eyJ1IjoiY2Fzc2tpbmciLCJhIjoiY2plcnRzaDJiMDAxYzJ2bnZ0OGU3dnB3OSJ9.kUHTVfObT_1gNrIdQM6eIQ";
const style = "mapbox://styles/mapbox/streets-v9";

const Map = ReactMapboxGl({
  accessToken
});
const containerStyle = {
  height: '70vh',
  width: '70vw'
};
const s = "mapbox://styles/cassking/cjfj1kxtmf3uy2ro3ybukbc26"
const center = [-75.163685, 39.952345]
class MapInFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {

  }
  render() {
    return (
      <Map
        style={s}
        containerStyle={containerStyle }
        center={center}>
    <Layer
      type="symbol"
      id="marker"
      layout={{ "icon-image": "marker-15" }}>
      <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
    </Layer>
</Map>

    );
  }
}
export default MapInFormContainer;
