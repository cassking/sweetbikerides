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

    }

    this.getLatLong = this.getLatLong.bind(this);
    this.getRoute = this.getRoute.bind(this);
  }

  getLatLong() {
    let start = `${this.state.route_review.map_start_latitude},${this.state.route_review.map_start_longitude}`;
    let end = `${this.state.route_review.map_end_latitude},${this.state.route_review.map_end_longitude}`;
    console.log(start);
    console.log(end);

    let routeAPI = `https://api.mapbox.com/directions/v5/mapbox/cycling/${start};${end}?geometries=geojson&access_token=pk.eyJ1IjoiY2Fzc2tpbmciLCJhIjoiY2plcnRzaDJiMDAxYzJ2bnZ0OGU3dnB3OSJ9.kUHTVfObT_1gNrIdQM6eIQ`
    console.log(routeAPI);
    fetch(routeAPI)
    .then(response => {
      let parsed = response.json()
      return parsed
    }).then(route_data => {
        this.setState({
          mappedRoute: route_data.routes[0].geometry.coordinates,
          center:route_data.routes[0].geometry.coordinates[0]
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
          mileage={this.state.route_review.mileage}
          difficulty={this.state.route_review.difficulty}
          points_interest={this.state.route_review.points_interest}
          start_location={this.state.route_review.start_location}
          end_location={this.state.route_review.end_location}
          bio={this.state.route_review.bio}
          username={this.state.route_review.username}
          location={this.state.route_review.location}
          routeReviewId={this.state.route_review.id}
          center={this.state.route_review.map_start_lng_lat}
          zoomLevel={[16]}
          animated={true}
          userLocationVisible={true}
          showUserLocation={true}
          mappedRoute={this.state.mappedRoute}
          center={this.state.center}
        />

      </div>
        <div className="route-review-show-comments">
          <hr />

      </div>
      </div>
    )
  }
}

export default RouteReviewShowContainer;
