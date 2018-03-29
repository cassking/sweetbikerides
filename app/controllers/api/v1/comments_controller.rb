class Api::V1::CommentsController < ApplicationController
  # before_action :authenticate_user!
  

  def create
    @signed_in = user_signed_in?
    @comment = Comment.new(comment_params)
    @comment.user = current_user
    render json: @comment

  end

  def destroy
    deleted_comment = Comment.find(params[:id])
    deleted_comment.destroy
    @comments = Comment.where(player_id: params[:player_id])
    @comments_sorted= @comments.reverse!
    @comments_with_username = @comments_sorted.map do |comment|
      { comment: comment,
        username:current_user.username
      }
    end
    if deleted_comment.destroy
      @comment_return = {
        comments: @comments_with_username
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
