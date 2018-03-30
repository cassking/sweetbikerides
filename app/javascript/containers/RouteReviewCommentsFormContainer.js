 import React, { Component } from 'react';
 import { Route, IndexRoute, Router, browserHistory, hashHistory, Link } from 'react-router'
import ReactMapboxGl, { Layer, Feature, ZoomControl } from "react-mapbox-gl";
 import DropdownMenu from 'react-dd-menu';
import { categoriesDifficulty } from '../Categories';
 import CommentForm from '../components/CommentForm'
 const accessToken = "pk.eyJ1IjoiY2Fzc2tpbmciLCJhIjoiY2plcnRzaDJiMDAxYzJ2bnZ0OGU3dnB3OSJ9.kUHTVfObT_1gNrIdQM6eIQ"

 class RouteReviewCommentsFormContainer extends Component {
//SAVE THIS FOR BUILDING OUT ROUTEREVIEWADDREVIEWFORMCONTAINER
//     this.state = {
//       // GeoJSON object to hold our measurement features
//       category: '',
//       categories: [],
//       geojson: {
//           "type": "FeatureCollection",
//           "features": []
//       },//end geojson obj
//       // Used to draw a line between points
//       linestring : {
//           "type": "Feature",
//           "geometry": {
//               "type": "LineString",
//               "coordinates": []
//           }
//       }//end linestring obj
//     }//end state
//
//   }

  constructor(props) {

    super(props)
    this.state = {
      comment: '',
      errors: {},
      //THESE COME IN AS PROPS
      signed_in: false,
      if_admin: false,
      user_id: null
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validateSignedIn(signed_in) {
    if (signed_in === false) {
      let newError = { SignIn: 'User must be signed in.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.SignIn
      this.setState({ errors: errorState })
      return true
    }
  }

  handleFormSubmit(e) {
    e.preventDefault();
    if (
      this.validateSignedIn(this.props.signed_in) && this.validateBodyChange(this.state.comment)
    ) {
      let payload = {
        comment: {
          body: this.state.comment
        }
      }
      this.props.addNewComment(payload)
      this.setState({
        comment: ''
      })
    }
  }

  handleChange(e) {
    this.setState({ comment: e.target.value })
  }

  validateBodyChange(body) {
    if (body.trim() === '') {
      let newError = { Body: 'Body may not be blank.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.Body
      this.setState({ errors: errorState })
      return true
    }
  }

  render() {
    let errorDiv;
    let errorItems;
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }
    let commentForm;
    //this logic not working, remove for now
    //while buildig out form
    if (this.props.signed_in) {
      commentForm = <CommentForm
                      comment={this.state.comment}
                      handleFormSubmit={this.handleFormSubmit}
                      handleChange={this.handleChange}
                      signed_in={this.props.signed_in}
                      if_admin={this.props.if_admin}
                      user_id={this.props.user_id}
                    />
    }
    else {
      commentForm =
    <p>Sign in to comment</p>

    }
    return (
      <div>
        {errorDiv}
        {commentForm}
      </div>
    )
  }
}

export default RouteReviewCommentsFormContainer;
