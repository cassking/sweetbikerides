 import React, { Component } from 'react';
 import { Route, IndexRoute, Router, browserHistory, hashHistory, Link } from 'react-router'
import ReactMapboxGl, { Layer, Feature, ZoomControl } from "react-mapbox-gl";
 import DropdownMenu from 'react-dd-menu';
import { categoriesDifficulty } from '../Categories';
 import AddReviewForm from '../components/AddReviewForm'
 // const accessToken = "pk.eyJ1IjoiY2Fzc2tpbmciLCJhIjoiY2plcnRzaDJiMDAxYzJ2bnZ0OGU3dnB3OSJ9.kUHTVfObT_1gNrIdQM6eIQ"

 class RouteReviewAddReviewFormContainer extends Component {


  constructor(props) {

    super(props)
    this.state = {
      route_review: '',
      errors: {},
      //THESE COME IN AS PROPS
      signed_in: false,
      if_admin: false,
      user_id: null,
      file:null//for file upload
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this)
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
        route_review: {
          name:this.state.route_review.description,
          description: this.state.route_review.description,
          mileage: this.state.route_review.mileage,
          category: this.state.route_review.category

        }
      }
      this.props.addNewReview(payload)
      this.setState({
        route_review: ''
      })
    }
  }

  handleChange(e) {
    this.setState({ route_review: e.target.value })
    this.setState({file: e.target.files[0]})
  }
  handleDescriptionChange(e){

  }
  handleNameChange(e){

  }

  handleFileUpload(file){
      const url = 'http://example.com/file-upload';
      const formData = new FormData();
      formData.append('file',file)
      const config = {
          headers: {
              'content-type': 'multipart/form-data'
          }
      }
      return  post(url, formData,config)
    }

  validateBodyChange(description) {
    if (description.trim() === '') {
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
      commentForm = <AddReviewForm
                      body={this.state.review.body}
                      handleFormSubmit={this.handleFormSubmit}
                      handleChange={this.handleChange}
                      signed_in={this.props.signed_in}
                      if_admin={this.props.if_admin}
                      user_id={this.props.user_id}
                    />
    }
    else {
      commentForm =
    // <p>Sign in to add a review</p>
    <AddReviewForm
                    body={this.state.route_review.body}
                    handleFormSubmit={this.handleFormSubmit}
                    handleChange={this.handleChange}
                    signed_in={this.props.signed_in}
                    if_admin={this.props.if_admin}
                    user_id={this.props.user_id}
                  />
    }
    return (
      <div>
        {errorDiv}
        {commentForm}
      </div>
    )
  }
}

export default RouteReviewAddReviewFormContainer;
