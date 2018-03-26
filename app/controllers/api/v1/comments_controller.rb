class Api::V1::CommentsController < ApplicationController
  before_action :authenticate_user!

  def index
    @comments = Comment.where(route_review_id: params[:route_review_id])
  end

  def create
    @signed_in = user_signed_in?
    @comment = Comment.new(comment_params)
    @comment.user = current_user
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
