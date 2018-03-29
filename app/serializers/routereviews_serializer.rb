class RouteReviewsSerializer < ActiveModel::Serializer
  attributes  :name, :description, :category, :weatherconditions, :mileage, :points_interest, :coordinates, :start_location, :end_location
  has_one :category
  has_one :user
end
