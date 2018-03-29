import React, { Component } from 'react';
import RouteReviewShow from '../components/RouteReviewShow';
import DropdownMenu from 'react-dd-menu';
import CommentsContainer from './CommentsContainer';

class RouteReviewShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route_review: {},
      coordinates: []
    }
  }

  componentWillMount() {
    let routereviewId = this.props.params.id
    fetch(`/api/v1/route_reviews/${routereviewId}`)
    .then(response => {
      let parsed = response.json()
      return parsed
    }).then(data => {
      this.setState({ route_review: data, coordinates: data["coordinates"]})
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
          routereviewId={this.props.params.id}
        />
      </div>
      </div>
    )
  }
}

export default RouteReviewShowContainer;
