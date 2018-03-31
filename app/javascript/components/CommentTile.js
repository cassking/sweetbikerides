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
      <hr className="elegant" />
      <h3 className="username-comment">{props.username} writes:</h3>
        <p>{props.body}</p>
        {/* <h1>{props.user_id}
        ....{props.comment_user_id}</h1> */}
        <p className="posted-at">Posted on: <span>
            {(new Date(datePosted)).toLocaleDateString() }
        {button}  </span></p>
    </div>
  )
}

export default CommentTile;
