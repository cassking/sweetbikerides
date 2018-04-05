import React from 'react';
import { Route, Point, IndexRoute, Router, browserHistory, hashHistory, Link } from 'react-router'
import ReactMapboxGl, { Layer, Feature, ZoomControl, GeolocateControl } from "react-mapbox-gl";
import { geoData } from '../Constants';
const accessToken = "pk.eyJ1IjoiY2Fzc2tpbmciLCJhIjoiY2plcnRzaDJiMDAxYzJ2bnZ0OGU3dnB3OSJ9.kUHTVfObT_1gNrIdQM6eIQ"


const style= "mapbox://styles/mapbox/streets-v10"
const Map = ReactMapboxGl({
  accessToken
});
const containerStyle = {
  height: '70vh',
  width: '70vw'
};

const lineLayout = {
  'line-cap': 'round',
  'line-join': 'round'
};

const linePaint = {
  'line-color': '#4790E5',
  'line-width': 12
};
//const mappedRoute = route.points.map( point => [point.lat, point.lng]);
//const route2 = 'https://api.mapbox.com/directions/v5/mapbox/cycling/-84.518641,39.134270;-84.512023,39.102779?geometries=geojson&access_token=pk.eyJ1IjoiY2Fzc2tpbmciLCJhIjoiY2plcnRzaDJiMDAxYzJ2bnZ0OGU3dnB3OSJ9.kUHTVfObT_1gNrIdQM6eIQ'

class MapTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center:[0,0],
      start:[],
      end:[],
      zoomLevel:[15],
      location:'',
      mappedRoute:[],
      map_start_lng_lat:this.props.map_start_lng_lat,
      map_end_lng_lat:this.props.map_start_lng_lat
    }
    this.onRouteChange = this.onRouteChange.bind(this)
  }

  onRouteChange(e){
  this.setState({
      mappedRoute: e.target.value
    });

  }

  componentDidMount() {
    if (this.props.map_start_lng_lat && this.props.map_start_lng_lat){
        let start = this.props.map_start_lng_lat;
        let end = this.props.map_end_lng_lat;
        let routeAPI = `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=pk.eyJ1IjoiY2Fzc2tpbmciLCJhIjoiY2plcnRzaDJiMDAxYzJ2bnZ0OGU3dnB3OSJ9.kUHTVfObT_1gNrIdQM6eIQ`
     fetch(routeAPI)
     .then(response => {
       let parsed = response.json()
       return parsed
     })
     .then(route_data => {
      this.setState({
         mappedRoute: route_data.routes[0].geometry.coordinates,
         center:route_data.routes[0].geometry.coordinates[0]
        })
      })
  }

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

 export default MapTile;
