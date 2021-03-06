class Api::V1::RouteReviewsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]

  def index
    # binding.pry
    @route_reviews = RouteReview.all
    render json: @route_reviews
  end

  def show
    @signed_in = user_signed_in?
    if_admin = false
    if_admin = current_user.admin? if @signed_in
    @route_review = RouteReview.find(params[:id])
    @comments = Comment.where(route_review_id: params[:id])
    render json: @route_review, serializer: RouteReviews::ShowSerializer
  end

  def create
      @signed_in = user_signed_in?
      if_admin = false
      if_admin = current_user.admin? if @signed_in
      if current_user
        @route_review =  RouteReview.new(route_review_params)
        @route_review.user = current_user
        if @route_review.save
          @route_review_return = {
            signed_in: @signed_in,
            route_review: @route_review
          }
          render json: {
            route_review: @route_review_return
          }
        end
      end
  end

  private

  def route_review_params
    params.require(:route_review).permit(
      :user_id,
      :signed_in,
      :id,
      :name,
      :description,
      :category,
      :difficulty,
      :weatherconditions,
      :mileage,
      :points_interest,
      :start_location,
      :end_location,
      map_start_lng_lat:[],
      map_end_lng_lat:[]
    )
  end
end
