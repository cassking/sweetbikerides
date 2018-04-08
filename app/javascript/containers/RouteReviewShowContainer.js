import React, { Component } from 'react';
import RouteReviewShow from '../components/RouteReviewShow';
import DropdownMenu from 'react-dd-menu';
import CommentsContainer from './CommentsContainer';
import { categoriesDifficulty } from '../Categories';
import {geoData} from '../Constants';
const difficulty = categoriesDifficulty.difficulty;
const categories = categoriesDifficulty.categories;
class RouteReviewShowContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      route_review: {},
      user_id: null,
      comments: [],
      signed_in: false,
      if_admin: false,
      mileage: 0,
      start_location:'',
      end_location:'',
      map_start_lng_lat:[],
      map_end_lng_lat:[],
      instructions:[]


    }
    this.getLatLong = this.getLatLong.bind(this);
    this.getRoute = this.getRoute.bind(this);
  }
  getLatLong() {
    let start = this.state.route_review.map_start_lng_lat;
    let end = this.state.route_review.map_end_lng_lat;

    let routeAPI = `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&&banner_instructions=true&geometries=geojson&access_token=pk.eyJ1IjoiY2Fzc2tpbmciLCJhIjoiY2plcnRzaDJiMDAxYzJ2bnZ0OGU3dnB3OSJ9.kUHTVfObT_1gNrIdQM6eIQ`
  console.log(routeAPI);
    fetch(routeAPI)
    .then(response => {
      let parsed = response.json()
      return parsed
    }).then(route_data => {
      // console.log('route data', route_data.routes[0].legs[0].steps[0].maneuver)
      let calculatedDistanceInMiles = route_data.routes[0].legs[0].distance*0.000621371192
      let maneuvers = route_data.routes[0].legs[0].steps[0].maneuver
      let finalDist = parseFloat(Math.round(calculatedDistanceInMiles * 100) / 100).toFixed(2)
      // console.log(route_data.waypoints[0].name)

        this.setState({
          mappedRoute: route_data.routes[0].geometry.coordinates,
          center:route_data.routes[0].geometry.coordinates[0],
          mileage:finalDist,
          start_location: route_data.waypoints[0].name,
          end_location: route_data.waypoints[1].name,

        })
    })
  }
  getRoute() {
    let route_reviewId = this.props.params.id
    fetch(`/api/v1/route_reviews/${route_reviewId}`)
    .then(response => {
      return response.json()
    }).then(data => {
      this.setState({
        route_review: data['route_review'],
        comments: data['comments'],
      })
      this.getLatLong()
    })
  }
  componentDidMount() {
      this.getRoute()
    }

  render() {
    return(
      <div className="main-wrapper">
        <div className="route-review-show">
        <RouteReviewShow
          key={this.state.route_review.id}
          id={this.state.route_review.id}
          name={this.state.route_review.name}
          description={this.state.route_review.description}
          category={this.state.route_review.category}
          mileage={this.state.mileage}
          difficulty={this.state.route_review.difficulty}
          points_interest={this.state.route_review.points_interest}

          bio={this.state.route_review.bio}
          username={this.state.route_review.username}
          location={this.state.route_review.location}
          routeReviewId={this.state.route_review.id}
          center={this.state.route_review.map_start_lng_lat}
          zoomLevel={[16]}
          animated={true}
          userLocationVisible={true}
          showUserLocation={true}
          coordinates={this.coordinates}
          map_start_lng_lat={this.state.route_review.map_start_lng_lat}
          map_end_lng_lat={this.state.route_review.map_end_lng_lat}
          mappedRoute={this.state.mappedRoute}
          center={this.state.center}
          start_location={this.state.start_location}
          end_location={this.state.end_location}

        />

      </div>
        <div className="route-review-show-comments">
          <hr />
        <CommentsContainer
          routeReviewId={this.state.route_review.id}
          comments={this.state.route_review.comments}
          signed_in={this.state.signed_in}
          if_admin={this.state.if_admin}
          current_user={this.current_user}
          user_id={this.state.user_id}
          getRoute={this.getRoute}

        />
      </div>
      </div>
    )
  }
}

export default RouteReviewShowContainer;
