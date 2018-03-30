import React, { Component } from 'react';
import CommentTile from '../components/CommentTile';
import RouteReviewCommentsFormContainer from './RouteReviewCommentsFormContainer';

class CommentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signed_in: false,
      current_user: null,
      currentPage: 1,
      commentsPerPage: 10,
      if_admin: false,
      user_id: null
    }
    this.handleClick = this.handleClick.bind(this);
    this.addNewComment = this.addNewComment.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  handleDeleteComment(comment_id) {
    let comments = this.props.comments
   let route_reviewId=this.props.routeReviewId;
console.log('route_reviewId', comments)
   fetch(`/api/v1/route_reviews/${route_reviewId}/comments/${comment_id}`, {
     method: 'DELETE',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
   .then(response => {
     if (response.ok) {
       return response;
     } else {
       let errorMessage = `${response.status} (${response.statusText})`,
       error = new Error(errorMessage);
       throw(error);
     }
   })
   .then(response => response.json())
   .then(body => {
     // debugger
     this.setState({
       signed_in: body['signed_in'],

       comments: body['comment']['comments']
     })
   })
  }


  addNewComment(formPayload) {
    let route_reviewId= this.props.route_reviewId
    fetch(`/api/v1/route_reviews/${route_reviewId}/comments`, {
      method: 'POST',
      body: JSON.stringify(formPayload),
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {

      let updatedComments = this.state.comments;
      updatedComments.unshift(body['comment'])
      this.setState({
        comments: updatedComments
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render(){
    let comments = []
    let user_id = this.props.user_id
    let current_user = this.props.current_user
    let signed_in = this.props.signed_in
    if (this.props.comments){
      comments = this.props.comments
    }

    const { currentPage, commentsPerPage } = this.state;
    const indexOfLastComment = currentPage * commentsPerPage;
    const indexOfFirstComment = indexOfLastComment - commentsPerPage;
    const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);

    let if_admin = this.state.if_admin
    const renderComments = currentComments.map((comment, index) => {
      let handleDelete =() =>{ this.handleDeleteComment(comment.id) }
      let show = false
      if (if_admin) {
        show = true
      } else if (current_user == comment.user_id ) {
        show = true
      } else {}

       return (
        <div className="comment-route-review">
          <CommentTile
            id={comment.id}
            key={comment.id}
            body={comment.body}
            username={comment.username}
            route_reviewId={comment.route_review_id}
            commentId={comment.id}
            handleDelete={handleDelete}
            show={show}
          />
        </div>
      )
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(comments.length / commentsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          className="button"
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });

    return(
      <div className="comments-container">
        <RouteReviewCommentsFormContainer
          addNewComment={this.addNewComment}
          signed_in={this.state.signed_in}
        />
        <ul>
          {renderComments}
        </ul>
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
      </div>
    )
  }
}

export default CommentsContainer;
