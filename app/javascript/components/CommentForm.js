import React from 'react';
import { Link } from 'react-router';

const CommentForm = props => {
  return(
    <div className="comment-form">
      <p> DO YOU SEE A COMMENT FORM?</p>
      <form onSubmit={props.handleFormSubmit}>
        <input onChange={props.handleChange} type='text' placeholder='comment body' value={props.comment} />
        <input type='submit' value='Post Comment' />
      </form>
    </div>
  )
}

export default CommentForm;
