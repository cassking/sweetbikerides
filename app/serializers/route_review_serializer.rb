class RouteReviewSerializer < ActiveModel::Serializer
  attributes :id,
            :name,
            :description,
            :category,
            :mileage,
            :start_location,
            :end_location
end
