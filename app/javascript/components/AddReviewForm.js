import React from 'react';
import { Link } from 'react-router';

const AddReviewForm = props => {
  return(
    <div className="add-review-form">
      <p> DO YOU SEE An ADD REview FORM?</p>
      <form onSubmit={props.handleFormSubmit}>
        <input onChange={props.handleChange} type='text' placeholder='review body' value={props.body} />
        <input onChange={props.handleChange} type='text' placeholder='review description' value={props.description} />
        <input onChange={props.handleChange} type='text' placeholder='review mileage' value={props.mileage} />
        <input onChange={props.handleChange} type='text' placeholder='review category' value={props.category} />
<input type='submit' value='Post Review' />
      </form>
    </div>
  )
}

export default AddReviewForm;
