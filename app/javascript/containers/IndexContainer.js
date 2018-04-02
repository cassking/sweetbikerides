import React, { Component } from 'react';
import { Route, IndexRoute, Router, browserHistory, hashHistory, Link } from 'react-router'
import ReactMapboxGl, { Layer, Feature, ZoomControl } from "react-mapbox-gl";
import { geoData } from '../Constants';
import DropdownMenu from 'react-dd-menu';
import IndexRouteReviewTile from '../components/IndexRouteReviewTile'
class IndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allRouteReviews: [],
      currentPage: 1,
      r_reviewsPerPage: 20,
      signed_in: false,
      current_user:null
    }
    this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount() {
    fetch('/api/v1/route_reviews')
    .then(response => {
      let parsed = response.json()
      return parsed
    }).then(route_reviews => {
      console.log('signed in..> ',route_reviews)

      this.setState({
        allRouteReviews: route_reviews.route_reviews,
        signed_in: route_reviews.signed_in,
        user_id: route_reviews.user_id
            })
    })
  }


  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { allRouteReviews, currentPage, r_reviewsPerPage } = this.state;
    console.log('allRouteReviews', allRouteReviews)
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allRouteReviews.length / r_reviewsPerPage); i++) {
      pageNumbers.push(i);
    }
    const r_reviews = allRouteReviews.map((rr, index) => {
      return(
        <div>
        <IndexRouteReviewTile
          key={rr.name+rr.id+rr.user_id}
          id={rr.id}
          name={rr.name}
          description={rr.description}
          mileage={rr.mileage}
          category={rr.category}
          coordinates={rr.coordinates}
        />

    </div>);
    });

    // Logic for displaying page numbers

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <button
          className="button numbers"
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </button>
      );
    });

    return(
      <div className="main-wrapper">
      <div className="route-reviews-wrapper">
        <ul>
          {r_reviews}
        </ul>
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
      </div>
      </div>

    )

  }

}

export default IndexContainer;
