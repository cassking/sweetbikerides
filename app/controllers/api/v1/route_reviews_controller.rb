class Api::V1::RouteReviewsController < ApplicationController
  # before_action :authenticate_user!

  def index
    @route_reviews = RouteReview.all
    # binding.pry
    render json: @route_reviews
  end

  def show
    @signed_in = user_signed_in?
    if current_user
      @current_user_id = current_user.id
    else
        @current_user_id = nil
    end
    @route_review = RouteReview.find(params[:id])

    @comments = Comment.where(route_review_id: params[:id])
    render json: @route_review, serializer: RouteReviews::ShowSerializer
  end

  private
    def pattern_params
      params.require(:route_review).permit(coordinates: [])
    end

  def route_review_params
    params.require(:route_review).permit(
      :user_id,
      :id,
      :name,
      :description,
      :category,
      :weatherconditions,
      :mileage,
      :points_interest,
      :start_location,
      :end_location,
      :coordinates,
      :map_start_latitude,
      :map_start_longitude,
      :map_end_latitude,
      :map_end_longitude
    )
  end
end