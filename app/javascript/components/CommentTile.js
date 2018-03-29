import React from 'react';
import { Link } from 'react-router';

const CommentTile = (props) => {
  let button = ""

  if (props.show) {
    button = <button type="button" className="delete-comment"  onClick = {props.handleDelete}>Delete Comment</button>
  }
  return(
    <div className="comment">
      <span className="username-comment">{props.username} writes:</span>
        <p>{props.body}</p>
        {button}

    </div>
  )
}

export default CommentTile;
