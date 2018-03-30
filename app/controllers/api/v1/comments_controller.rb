class Api::V1::CommentsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]
  def index
    @signed_in = user_signed_in?
    if_admin = false
    if_admin = current_user.admin? if @signed_in
    @comments = Comment.where(route_review_id: params[:route_review_id])
      render json: {
        signed_in: @signed_in,
        if_admin: if_admin,
        user_id: current_user.id
      }
  end

  def create
    # binding.pry
    @signed_in = user_signed_in?
    @comment = Comment.new(comment_params)
    @comment.user = current_user
    @comment.route_review = RouteReview.find(params[:route_review_id])
    # binding.pry
    if @comment.save
      @comment_return = {
        signed_in: @signed_in,
        comment: @comment,
        username:@comment.user.id
      }
      # binding.pry
      render json: { comment: @comment_return, signed_in: @signed_in }
    end
  end

  def destroy
    @deleted_comment = Comment.find(params[:id])
    if current_user ==   @deleted_comment.user
      @deleted_comment.destroy
      @comments_unsorted = Comment.where(route_review_id: params[:route_review_id])
      @comments= @comments_unsorted.reverse
    end
  # binding.pry
    if @deleted_comment.destroy
      @comment_return = {
        comments: @comments
      }
      render json: { comment: @comment_return }
    end
  end

  private

  def comment_params
    params.require(:comment).permit(
      :body,
      :user_id,
      :rating,
      :route_review_id)
  end

end
