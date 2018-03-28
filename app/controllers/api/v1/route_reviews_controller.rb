class Api::V1::RouteReviewsController < ApplicationController
  def index
    @route_reviews = RouteReview.all
    render json: @route_reviews
  end

  private

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
      :map_start_latitude,
      :map_start_longitude,
      :map_end_latitude,
      :map_end_longitude
    )
  end
end
