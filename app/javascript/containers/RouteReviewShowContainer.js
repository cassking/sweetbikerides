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
      if_admin: false

    }

  }

  componentDidMount() {
    let route_reviewId = this.props.params.id
    fetch(`/api/v1/route_reviews/${route_reviewId}`)
    .then(response => {
      return response.json()
    }).then(data => {
      this.setState({
        route_review: data['route_review'],
        comments: data['comments']
      })
    })
  }


  render() {
    // debugger

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
          coordinates={this.coordinates}
          map_start_lng_lat={this.state.route_review.map_start_lng_lat}
          map_end_lng_lat={this.state.route_review.map_end_lng_lat}


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

        />
      </div>
      </div>
    )
  }
}

export default RouteReviewShowContainer;
