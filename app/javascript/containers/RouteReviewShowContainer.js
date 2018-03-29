import React, { Component } from 'react';
import RouteReviewShow from '../components/RouteReviewShow';
import DropdownMenu from 'react-dd-menu';
import CommentsContainer from './CommentsContainer';

class RouteReviewShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route_review: {},
      user_id: null,
      comments: []
    }
  }

  componentDidMount() {
    let route_reviewId = this.props.params.id
    fetch(`/api/v1/route_reviews/${route_reviewId}`)
    .then(response => {
      // let parsed = response.json()
      return response.json()
    }).then(data => {
      // debugger
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
          routeReviewId={this.props.params.id}
          comments={this.state.route_review.comments}
          signed_in={this.state.signed_in}
          user_id={this.state.user_id}
        />
      </div>
      </div>
    )
  }
}

export default RouteReviewShowContainer;
