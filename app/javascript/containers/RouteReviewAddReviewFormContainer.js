import React, { Component } from 'react';
import { Route, IndexRoute, Router, browserHistory, hashHistory, Link } from 'react-router'
import ReactMapboxGl, { Layer, Feature, ZoomControl } from "react-mapbox-gl";
import { categoriesDifficulty } from '../Categories';
import AddReviewForm from '../components/AddReviewForm'
const coordinates =[
[-84.518399,39.134126],[-84.51841,39.133781],[-84.520091,39.133389],[-84.520497,
39.131655],[-84.520852,39.128039],[-84.52036,39.127901],[-84.52094,39.122783],
[-84.52022,39.122713],[-84.520768,39.120841],[-84.519639,39.120268],
[-84.513743,39.115317],[-84.514554,39.114744],[-84.514307,39.114531],
[-84.514551,39.114249],[-84.511692,39.102682],[-84.511987,39.102638]
]
 // const accessToken = "pk.eyJ1IjoiY2Fzc2tpbmciLCJhIjoiY2plcnRzaDJiMDAxYzJ2bnZ0OGU3dnB3OSJ9.kUHTVfObT_1gNrIdQM6eIQ"

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
    this.handleMileageChange = this.handleMileageChange.bind(this)
    this.handleEndLocationChange = this.handleEndLocationChange.bind(this)
    this.handleStartLocationChange = this.handleStartLocationChange.bind(this)
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
            return response
          } else {
            if (response.status == 401) {
              // alert('You must be signed in to do that')
            } else {
            let errorMessage = `${response.status}`
            error = new Error(errorMessage)
            throw(error)
            }
          }
        }
      )
      .then(response => response.json())
      .then(body => {
        alert("route review added!")
      })
      // .then(body => browserHistory.push(`/route_reviews/${body.route_review.id}`))
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    }

  handleFormSubmit(e) {
    // debugger
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

      console.log('payload', payload)
      this.addNewRouteReview(payload)
      //clear for next
      this.setState({
        route_review: {}
      })
    }
    // else{
    //   alert('Please, fill in the required fields')
    // }
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
  handleStartLocationChange(e){
    this.setState( {start_location: e.target.value } )
  }
  handleEndLocationChange(e){
    this.setState( {end_location: e.target.value } )
  }
  handleMileageChange(e){
    this.setState( {mileage: e.target.value } )
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
    let errorDiv;
    let errorItems;
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }
    let addReviewForm;
    if (this.state.signed_in) {
    addReviewForm =
    <div className="form-elements">
      <p>Hello, you are now  signed in and can add your ride!</p>
      <AddReviewForm
        nameValue={this.state.name}
        descriptionValue={this.state.description}
        categoryValue={this.state.category}
        difficultyValue={this.state.difficulty}
        mileageValue={this.state.mileage}
        pointsOfInterestValue={this.state.points_interest}
        startLocationValue={this.state.start_location}
        endLocationValue={this.state.end_location}
        handleFormSubmit={this.handleFormSubmit}
        onChange={this.handleChange}
        handleCategorySelectChange={this.handleCategorySelectChange}
        handleDifficultySelectChange={this.handleDifficultySelectChange}
        handleDescriptionChange={this.handleDescriptionChange}
        handleNameChange={this.handleNameChange}
        handleMileageChange={this.handleMileageChange}
        handleStartLocationChange={this.handleStartLocationChange}
        handleEndLocationChange={this.handleEndLocationChange}
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
        <p>Please, sign in to add a review.</p>
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
