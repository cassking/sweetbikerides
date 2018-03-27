class Api::V1::RouteReviewsController < ApplicationController
  def index
    @route_reviews = RouteReview.all
    @geojson = Array.new
    build_geojson(route_review, @geojson)
      render json: route_reviews
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
      :coordinates
    )
  end
end
