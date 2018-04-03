import React from 'react';
import ReactMapboxGl, {ScaleControl,ZoomControl,RotationControl,Layer,Feature } from "react-mapbox-gl";
const accessToken = "pk.eyJ1IjoiY2Fzc2tpbmciLCJhIjoiY2plcnRzaDJiMDAxYzJ2bnZ0OGU3dnB3OSJ9.kUHTVfObT_1gNrIdQM6eIQ";
// const style = "mapbox://styles/cassking/cjfj1kxtmf3uy2ro3ybukbc26";

const style= "mapbox://styles/mapbox/streets-v10"
const Map = ReactMapboxGl({
  accessToken
});
const containerStyle = {
  height: '70vh',
  width: '70vw'
};
const center = [-75.163685, 39.952345]
const route: Route = require('./data/route.json');
const lineLayout = {
  'line-cap': 'round',
  'line-join': 'round'
};

const linePaint = {
  'line-color': '#4790E5',
  'line-width': 12
};
const mappedRoute = route.points.map( point => [point.lat, point.lng]);
const route2 = 'https://api.mapbox.com/directions/v5/mapbox/cycling/-84.518641,39.134270;-84.512023,39.102779?geometries=geojson&access_token=pk.eyJ1IjoiY2Fzc2tpbmciLCJhIjoiY2plcnRzaDJiMDAxYzJ2bnZ0OGU3dnB3OSJ9.kUHTVfObT_1gNrIdQM6eIQ'
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
      center: [-75.163685, 39.952345],//philly is default
      zoomLevel:[15],
      location:'',
       mappedRoute:[]
    }
    this.onRouteChange = this.onRouteChange.bind(this)
    this.getRoute=this.getRoute.bind(this)
  }

  onRouteChange(e){
    this.setState({ mappedRoute: e.target.value });
  }

  componentDidMount() {
    fetch('https://api.mapbox.com/directions/v5/mapbox/cycling/-84.518641,39.134270;-84.512023,39.102779?geometries=geojson&access_token=pk.eyJ1IjoiY2Fzc2tpbmciLCJhIjoiY2plcnRzaDJiMDAxYzJ2bnZ0OGU3dnB3OSJ9.kUHTVfObT_1gNrIdQM6eIQ')
    .then(response => {
      let parsed = response.json()
      return parsed
    }).then(route_data => {
      console.log('route data ',route_data.routes[0].geometry.coordinates[0])
      console.log('mapped', mappedRoute[0])

      this.setState({
        mappedRoute: route_data.routes[0].geometry.coordinates,
        center:route_data.routes[0].geometry.coordinates[0]
            })
    })
    alert(this.state.center)
  }


getRoute() {
 // let start = [-84.518641, 39.134270];
 //  let end = [-84.512023, 39.102779];
let routeRequest ='https://api.mapbox.com/directions/v5/mapbox/cycling/-84.518641,39.134270;-84.512023,39.102779?geometries=geojson&access_token=pk.eyJ1IjoiY2Fzc2tpbmciLCJhIjoiY2plcnRzaDJiMDAxYzJ2bnZ0OGU3dnB3OSJ9.kUHTVfObT_1gNrIdQM6eIQ'
}

  render() {
    return (
      <Map
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

    );
  }
}
export default MapInFormContainer;
