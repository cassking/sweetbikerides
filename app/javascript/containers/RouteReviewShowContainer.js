import React, { Component } from 'react';
import RouteReviewShow from '../components/RouteReviewShow';
import DropdownMenu from 'react-dd-menu';
import CommentsContainer from './CommentsContainer';
import { categoriesDifficulty } from '../Categories';
import {geoData} from '../Constants';

const difficulty = categoriesDifficulty.difficulty;
const categories = categoriesDifficulty.categories;
const coordinates =[[8.67266, 50.11792],
[8.67267, 50.11778],
[8.673, 50.11673],
[8.673, 50.11673],
[8.67195, 50.11675],
[8.67195, 50.11675],
[8.67185, 50.11674],
[8.67172, 50.11674],
[8.67137, 50.11673],
[8.6713, 50.11673],
[8.67123, 50.11672],
[8.67107, 50.11668],
[8.67104, 50.11666],
[8.67102, 50.11665],
[8.67098, 50.11662],
[8.67098, 50.11655],
[8.67098, 50.11648],
[8.67092, 50.11591],
[8.67086, 50.11542],
[8.67086, 50.11542],
[8.6708, 50.11528],
[8.67076, 50.11518],
[8.67068, 50.11502],
[8.67048, 50.11473],
[8.67042, 50.11466],
[8.67034, 50.11459],
[8.67026, 50.11451],
[8.67021, 50.11447],
[8.66997, 50.11427],
[8.6699, 50.11422],
[8.66969, 50.11407],
[8.66958, 50.11399],
[8.66947, 50.11391],
[8.66878, 50.11341],
[8.66851, 50.11324],
[8.66851, 50.11324],
[8.66859, 50.11319],
[8.66866, 50.11312],
[8.66876, 50.11296],
[8.6689, 50.11278],
[8.66903, 50.11259],
[8.66906, 50.11255],
[8.6691, 50.11251],
[8.66938, 50.11224],
[8.66972, 50.11186],
[8.66976, 50.11172],
[8.67047, 50.11092],
[8.67081, 50.11053],
[8.67087, 50.11048],
[8.67087, 50.11048],
[8.67112, 50.11019],
[8.67134, 50.10997],
[8.67134, 50.10997],
[8.66966, 50.1095]]
// const coordinates = geoData.coordinates
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
//add this below later when resolved
  // center={this.state.route_review.coordinates[0]}


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
          center={[-75.163685, 39.952345]}
          zoomLevel={4}
          animated={true}
          showUserLocation={true}
          coordinates={this.coordinates}

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
