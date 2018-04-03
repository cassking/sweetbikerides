class RouteReviews::IndexSerializer < RouteReviewSerializer
  attributes :id,
            :name,
            :description,
            :category,
            :weatherconditions,
            :mileage,
            :points_interest,
            :coordinates,
            :start_location,
            :end_location,
            :difficulty,
            :map_start_latitude,
            :map_end_latitude,
            :map_start_latitude,
            :map_end_longitude

end
