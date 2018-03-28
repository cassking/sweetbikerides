class Api::V1::CategoriesController < ApplicationController
  def index
    @categories = Category.all
    render json: @categories
  end

  private

  def category_params
    params.require(:category).permit(
      :name,
      :description
      )
  end
end
