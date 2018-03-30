class Api::V1::CommentsController < ApplicationController
  before_action :authenticate_user!
  def index
    @signed_in = user_signed_in?
    if_admin = false
    if_admin = current_user.admin? if @signed_in
    @comments = Comment.where(route_review_id: params[:route_review_id])
  end

  def create
    @signed_in = user_signed_in?
    @comment = Comment.new(comment_params)
    @comment.user = current_user
    render json: @comment
  end

  def destroy
    # if_admin = current_user.admin? if @signed_in

    @deleted_comment = Comment.find(params[:id])
    if current_user ==   @deleted_comment.user
      @deleted_comment.destroy
      @comments_unsorted = Comment.where(route_review_id: params[:route_review_id])
      @comments= @comments_unsorted.reverse
    end

    if deleted_comment.destroy
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
