import React, { Component } from 'react';
import { Route, IndexRoute, Router, browserHistory, hashHistory, Link } from 'react-router'
import ReactMapboxGl, { Layer, Feature, ZoomControl } from "react-mapbox-gl";
import DropdownMenu from 'react-dd-menu';
import { categoriesDifficulty } from '../Categories';
import AddReviewForm from '../components/AddReviewForm'
// import MapInFormContainer from './MapInFormContainer'
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
    this.handleCategorySelectChange = this.handleCategorySelectChange.bind(this)
    this.handleDifficultySelectChange = this.handleDifficultySelectChange.bind(this)
    this.addNewRouteReview = this.addNewRouteReview.bind(this)

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
  addNewRouteReview(submission) {
      fetch("/api/v1/route_reviews", {
        method: 'post',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(submission)
      }).then(response => {
          if (response.ok) {
            return response
          } else {
            if (response.status == 401) {
              alert('You must be signed in to do that')
            } else {
            let errorMessage = `${response.status}`
            error = new Error(errorMessage)
            throw(error)
            }
          }
        }
      )
      .then(response => response.json())
      .then(body => browserHistory.push(`/route_reviews/${body.route_review.id}`))
      .catch(error => console.error(`Error in fetch: ${error.message}`))
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
          difficulty: this.state.route_review.difficulty,
          category: this.state.route_review.category

        }
      }
      alert('paylod', payload)

      this.addNewRouteReview(payload)
      //clear for next
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
  handleCategorySelectChange(e){

  }
  handleDifficultySelectChange(e){

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
    let addReviewForm;
    //this logic not working, remove for now
    //while buildig out form
    if (this.props.signed_in) {
    addReviewForm =
    <div className="form-elements">
      <AddReviewForm
        body={this.state.review.body}
        handleFormSubmit={this.handleFormSubmit}
        handleChange={this.handleChange}
        signed_in={this.props.signed_in}
        if_admin={this.props.if_admin}
        user_id={this.props.user_id}
      />

    </div>
    }
    else {
      addReviewForm=

    // <p>Sign in to add a review</p>
      <div className="form-elements">

    <AddReviewForm
      body={this.state.route_review.body}
      handleFormSubmit={this.handleFormSubmit}
      handleChange={this.handleChange}
      signed_in={this.props.signed_in}
      if_admin={this.props.if_admin}
      user_id={this.props.user_id}
    />


      </div>

    }
    return (
      <div>
        {errorDiv}
        {addReviewForm}
      </div>
    )
  }
}

export default RouteReviewAddReviewFormContainer;
