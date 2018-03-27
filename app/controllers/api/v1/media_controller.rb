class Api::V1::MediaController < ApplicationController
  def index
    @media = Medium.all
    render json: media
  end

  private

  def media_params
    params.require(:medium).permit(
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
