class Api::V1::RouteReviewCategoriesController < ApplicationController

private

def route_review_category_params
  params.require(:route_review_category).permit(
    :category_id,
    :route_review_id
    )
end


end
