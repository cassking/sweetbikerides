import React, { Component } from 'react';
import { Route, IndexRoute, Router, browserHistory, hashHistory, Link } from 'react-router'
import ReactMapboxGl, { Layer, Feature, ZoomControl } from "react-mapbox-gl";
import { categoriesDifficulty } from '../Categories';
import AddReviewForm from '../components/AddReviewForm'

 class RouteReviewAddReviewFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      route_review: {},
      errors: {},
      signed_in: false,
      if_admin: false,
      user_id:0,
      name:'',
      description:'',
      category:'',
      difficulty: '',
      mileage:0,
      start_location:'',
      end_location:'',
      points_interest:'',
      map_start_lng_lat:[],
      map_end_lng_lat:[]
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCategorySelectChange = this.handleCategorySelectChange.bind(this)
    this.handleDifficultySelectChange = this.handleDifficultySelectChange.bind(this)
    this.handlePointsOfInterestChange = this.handlePointsOfInterestChange.bind(this)
    this.addNewRouteReview = this.addNewRouteReview.bind(this)
    this.validateField=this.validateField.bind(this)
    this.getSignedInData=this.getSignedInData.bind(this)
    this.handleStartCoordinatesChange=this.handleStartCoordinatesChange.bind(this)
    this.handleEndCoordinatesChange=this.handleEndCoordinatesChange.bind(this)
  }
  componentDidMount(){
     this.getSignedInData()
   }

   getSignedInData(){
       fetch(`/api/v1/route_reviews`, {
         credentials: 'same-origin',
         headers: {
           'Content-Type': 'application/json',
           'Accept': 'application/json'
         }
       })
       .then(response => {
         if (response.ok) {
          return response.json()
         } else {
           let errorMessage = `${response.status} (${response.statusText})`,
           error = new Error(errorMessage);
           throw(error);
         }
       })
       .then(body => {
         this.setState({
           signed_in: body.route_reviews[0]["signed_in"]
         })
       })
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
            return response;
            //browserHistory.push(`/`)
          } else {
            if (response.status == 401) {
            } else {
            let errorMessage = `${response.status}`
            error = new Error(errorMessage)
            throw(error)
            }
          }
        }
      )
      .then(response => response.json() )
      .then( body => browserHistory.push( `/route_reviews/${body.route_review.route_review.id}`))
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    }

  handleFormSubmit(e) {
    e.preventDefault();
    if (
      this.validateSignedIn(this.state.signed_in)&&
      this.validateField(this.state.category)&&
      this.validateField(this.state.name) &&
      this.validateField(this.state.description) &&
      this.validateField(this.state.map_start_lng_lat) &&
      this.validateField(this.state.map_end_lng_lat)

    ) {
      let payload = {
        route_review: {
          name:this.state.name,
          description: this.state.description,
          difficulty: this.state.difficulty,
          category: this.state.category,
          mileage:this.state.mileage,
          start_location:this.state.start_location,
          end_location: this.state.end_location,
          points_interest:this.state.points_interest,
          map_start_lng_lat:this.state.map_start_lng_lat,
          map_end_lng_lat:this.state.map_end_lng_lat
        }
      }

      this.addNewRouteReview(payload)
      //clear for next
      this.setState({
        route_review: {}
      })
    }

  }

  validateField(text, error) {
   if ( text === '' || text === ' ') {
     let newError = error
     this.setState({ errors: Object.assign(this.state.errors, newError) })
     return false
   } else {
     let errorState = this.state.errors
     // let errorKey = Object.keys(error)[0]
     // delete errorState[errorKey]
     this.setState({ errors: errorState })
     return true
   }
 }

  handleChange(e) {
  this.setState({ route_review: e.target.value })
  }
  handleNameChange(e){
    this.validateField(e.target.value, { name: 'Please give the route a name' } )
    this.setState( { name: e.target.value } )
  }
  handleDescriptionChange(e){
    this.validateField(e.target.value, { description: 'Please give the route a description' } )
    this.setState( { description: e.target.value } )
  }

  handleCategorySelectChange(e){
    this.validateField(e.target.value, { category: 'Please  choose a category' } )
    this.setState( { category: e.target.value } )
  }
  handleDifficultySelectChange(e){
    this.setState( { difficulty: e.target.value } )
  }

  handlePointsOfInterestChange(e){
    this.setState( {points_interest: e.target.value } )
  }
  handleStartCoordinatesChange(coordinates){
    this.setState( {  map_start_lng_lat:coordinates})
  }
  handleEndCoordinatesChange(coordinates){
    this.setState( {  map_end_lng_lat:coordinates})

  }

  render() {
    let errorDiv, errorItems, addReviewForm;
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }
    if (this.state.signed_in) {
    addReviewForm =
    <div className="form-elements">
      <p>Hello, you are now  logged in and can add your personalized details and a map for a new Route Review!</p>
      <AddReviewForm
        nameValue={this.state.name}
        descriptionValue={this.state.description}
        categoryValue={this.state.category}
        difficultyValue={this.state.difficulty}
        pointsOfInterestValue={this.state.points_interest}
        handleFormSubmit={this.handleFormSubmit}
        onChange={this.handleChange}
        handleCategorySelectChange={this.handleCategorySelectChange}
        handleDifficultySelectChange={this.handleDifficultySelectChange}
        handleDescriptionChange={this.handleDescriptionChange}
        handleNameChange={this.handleNameChange}
        handlePointsOfInterestChange={this.handlePointsOfInterestChange}
        handleStartCoordinatesChange={this.handleStartCoordinatesChange}
        handleEndCoordinatesChange={this.handleEndCoordinatesChange}
        signed_in={this.state.signed_in}
        if_admin={this.state.if_admin}
        user_id={this.state.user_id}
      />
    </div>
    }
    else {
      addReviewForm=
      <div className="form-elements">
        <p>Please, LOG IN to add a review.</p>
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
