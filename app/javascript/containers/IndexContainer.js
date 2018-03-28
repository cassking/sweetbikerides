import React, { Component } from 'react';
import { Route, IndexRoute, Router, browserHistory, Link } from 'react-router'
import ReactMapboxGl, { Layer, Feature, ZoomControl } from "react-mapbox-gl";
import { geoData } from '../Constants';
import DropdownMenu from 'react-dd-menu';
import RouteReviewTile from '../components/RouteReviewTile'

class IndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allRouteReviews: [],
      currentPage: 1,
      r_reviewsPerPage: 20
    }
    this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount() {

    fetch('/api/v1/route_reviews')
    .then(response => {
      console.log(response)
      let parsed = response.json()
      return parsed
    }).then(route_reviews => {
      this.setState({
        allRouteReviews: route_reviews
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
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allRouteReviews.length / r_reviewsPerPage); i++) {
      pageNumbers.push(i);
    }
    const r_reviews = allRouteReviews.map((rr, index) => {
      return(
        <div>
        <RouteReviewTile
          key={rr.id}
          id={rr.id}
          user_id={rr.user_id}
          name={rr.name}
          description={rr.description}
          mileage={rr.mileage}
          category={rr.category}
          weatherconditions={rr.weatherconditions}
          points_interest={rr.points_interest}
          start_location={rr.start_location}
          end_location={rr.end_location}
          map_start_latitude={rr.map_start_latitude}
          map_start_longitude={rr.map_start_longitude}
          map_end_latitude={rr.map_end_latitude}
          map_end_longitude={rr.map_end_longitude}
        /></div>);
    });

    // Logic for displaying page numbers


    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <button
          className="button"
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
        <Link to={'/mapcontainer'}>Peek at example map here</Link>

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
