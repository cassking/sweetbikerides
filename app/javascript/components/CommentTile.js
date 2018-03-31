import React from 'react';
import { Link } from 'react-router';
import {FormattedDate} from 'react';

const CommentTile = (props) => {
  let button = ""
  let datePosted = props.datePosted

  if (props.show) {
    button = <button type="button" className="delete-comment"  onClick = {props.handleDelete}>Delete Comment</button>
  }
  return(
    <div className="comment">
      <h3 className="username-comment">{props.username} writes:</h3>
        <p>{props.body}</p>

        <p className="posted-at">Posted on: <span>
            {(new Date(datePosted)).toLocaleDateString() }
        {button}  </span></p>
        <hr className="elegant" />

    </div>
  )
}

export default CommentTile;
