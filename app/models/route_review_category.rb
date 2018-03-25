class RouteReviewCategory < ApplicationRecord
  belongs_to :category
  belongs_to :route_review
end
