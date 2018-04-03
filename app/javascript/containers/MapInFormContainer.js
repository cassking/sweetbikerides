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
      direction: 0,
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
    fetch('https://api.mapbox.com/directions/v5/mapbox/cycling/-84.518641,39.134270;-84.512023,39.102779?geometries=geojson')
    console.log(mappedRoute[0])
    this.state = {
       //  center: mappedRoute[0],
       // mappedRoute: mappedRoute
    }
  }

getRoute() {
 let start = [-84.518641, 39.134270];
  let end = [-84.512023, 39.102779];
  let directionsRequest = 'https://api.mapbox.com/directions/v5/mapbox/cycling/' + start[0] + ',' + start[1] + ';' + end[0] + ',' + end[1] + '?geometries=geojson&access_token=' + mapboxgl.accessToken;
  $.ajax({
    method: 'GET',
    url: directionsRequest,
  }).done(function(data) {
    var route = data.routes[0].geometry;
    map.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: route
        }
      },
      paint: {
        'line-width': 2
      }
    });
    // this is where the code from the next step will go
  });
}

  render() {
    return (
      <Map
        zoomLevel={this.state.zoomLevel}
        style={style}
        direction={this.state.direction}

        showsUserLocation={true}
        userLocationVisible={true}
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
