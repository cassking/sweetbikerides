import React from 'react';
import ReactMapboxGl, {ScaleControl,ZoomControl,RotationControl,Layer,Feature } from "react-mapbox-gl";
const accessToken = "pk.eyJ1IjoiY2Fzc2tpbmciLCJhIjoiY2plcnRzaDJiMDAxYzJ2bnZ0OGU3dnB3OSJ9.kUHTVfObT_1gNrIdQM6eIQ";
const style = "mapbox://styles/cassking/cjfj1kxtmf3uy2ro3ybukbc26";
const Map = ReactMapboxGl({
  accessToken
});
const containerStyle = {
  height: '70vh',
  width: '70vw'
};
const center = [-75.163685, 39.952345]
const route: Route = require('./route.json');
const lineLayout = {
  'line-cap': 'round',
  'line-join': 'round'
};

const linePaint = {
  'line-color': '#4790E5',
  'line-width': 12
};
const mappedRoute = route.points.map( point => [point.lat, point.lng]);
interface Point {
  lng: number;
  lat: number;
}
interface Route {
  [key: string]: any;
  points: Point[];
}
class MapInFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [],
      //routeIndex: [],
       mappedRoute:[]
    }
  }
  componentDidMount() {
    console.log(mappedRoute[0])
    this.state = {
       //  center: mappedRoute[0],
       // mappedRoute: mappedRoute
    }

  }
  render() {
    return (
      <Map
        zoomLevel={[15]}
        style={style}
        containerStyle={containerStyle }
        center={mappedRoute[0]}>

      <Layer type="line" layout={lineLayout} paint={linePaint}>
        <Feature coordinates={mappedRoute} />
      </Layer>
</Map>

    );
  }
}
export default MapInFormContainer;
