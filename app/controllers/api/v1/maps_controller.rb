class Api::V1::MapsController < ApplicationController
  def index
    @maps = Map.all
    # render json: maps

    respond_to do |format|
      format.html
      format.json { render json: # some JSON data }
    end
  end

  private

  def map_params
    params.require(:map).permit(
      :route_review_id,
      :name,
      :description
      )
  end
end
