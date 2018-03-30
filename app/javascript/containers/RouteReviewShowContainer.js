import React, { Component } from 'react';
import RouteReviewShow from '../components/RouteReviewShow';
import DropdownMenu from 'react-dd-menu';
import CommentsContainer from './CommentsContainer';
import { categoriesDifficulty } from '../Categories';

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
