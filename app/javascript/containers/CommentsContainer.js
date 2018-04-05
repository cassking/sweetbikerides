import React, { Component } from 'react';
import CommentTile from '../components/CommentTile';
import RouteReviewCommentsFormContainer from './RouteReviewCommentsFormContainer';

class CommentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments:this.props.comments,
      signed_in: false,
      current_user: null,
      currentPage: 1,
      commentsPerPage: 10,
      if_admin: false,
      user_id: null

    }
    this.getCommentsDataSignedInCurrentUser = this.getCommentsDataSignedInCurrentUser.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addNewComment = this.addNewComment.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  handleDeleteComment(comment_id) {
    let comments = this.props.comments
    let route_reviewId=this.props.routeReviewId;
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
     console.log('COMMENT deleted', body)
     this.setState({
       // signed_in: body['signed_in'],
       comments: this.props.comments.pop(body['comment'])
       // comments: body['comment']
     })
   })
  }
  componentDidMount(){
    let route_reviewId=this.props.routeReviewId;

     this.getCommentsDataSignedInCurrentUser()
   }
  getCommentsDataSignedInCurrentUser(){
    let route_reviewId=this.props.routeReviewId;
    //will use THIS to get current user and signed in, but comments are
    // gotten via props from parent
      fetch(`/api/v1/route_reviews/${route_reviewId}/comments`, {
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
//only setting the current user and signed in states here
        this.setState({
          signed_in: body['signed_in'],
          if_admin: body['if_admin'],
          user_id: body['user_id']
        })
      })
    }

  addNewComment(formPayload) {
    let route_reviewId=this.props.routeReviewId;
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
    .then(data => {
      console.log('data ',data)
      //in this app comment are brought in as props
        let updatedComments = this.props.comments;
          console.log('data ',updatedComments)
          updatedComments.unshift(data['comment']['comment']['body'])
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
    //the comments in this case come from
    //parent as props ..but..
    let comments = []
    //...get the signed_in and current user from the
    //getCommentsDataSignedInCurrentUser() fetch call
    let if_admin = this.state.if_admin
    let signed_in = this.state.signed_in
    let user_id = this.state.user_id
    //again, comments here come via props
    if (this.props.comments){
      comments = this.props.comments
    }

    const { currentPage, commentsPerPage } = this.state;
    const indexOfLastComment = currentPage * commentsPerPage;
    const indexOfFirstComment = indexOfLastComment - commentsPerPage;
    const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);

    const renderComments = currentComments.reverse().map((comment, index) => {
      let handleDelete =() =>{ this.handleDeleteComment(comment.id) }
      let show = false
      if (if_admin) {
        show = true
      } else if (user_id == comment.user_id ) {

        show = true
      } else {}

       return (
        <div className="comment-route-review">
          <CommentTile
            id={comment.id}
            key={comment.id}
            body={comment.body}
            username={comment.username}
            user_id={user_id}
            comment_user_id={comment.user_id}
            route_reviewId={comment.route_review_id}
            commentId={comment.id}
            datePosted={comment.created_at}
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
          if_admin={this.state.if_admin}
          user_id={this.state.user_id}

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
