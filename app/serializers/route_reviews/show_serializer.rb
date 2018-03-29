class RouteReviews::ShowSerializer < RouteReviewSerializer
  attributes :id,
            :name,
            :description,
            :category,
            :weatherconditions,
            :mileage,
            :points_interest,
            :coordinates,
            :start_location,
            :end_location
  has_many :comments, serializer: Comments::IndexSerializer
  has_one :category
end
