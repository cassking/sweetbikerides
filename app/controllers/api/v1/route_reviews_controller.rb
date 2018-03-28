class Api::V1::RouteReviewsController < ApplicationController
  def index
    @route_reviews = RouteReview.all
    render json: @route_reviews
  end
  def show
    @signed_in = user_signed_in?
    if_admin = false
    if_admin = current_user.admin? if @signed_in
    @route_review= RouteReview.find(params[:id])
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
      :coordinates,
      :map_start_latitude,
      :map_start_longitude,
      :map_end_latitude,
      :map_end_longitude
    )
  end
end
