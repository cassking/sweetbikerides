class RouteReviews::IndexSerializer < RouteReviewSerializer
  attributes :id,
            :name,
            :description,
            :category,
            :weatherconditions,
            :mileage,
            :points_interest,
            :start_location,
            :end_location,
            :difficulty,
            :map_start_lng_lat,
            :map_end_lng_lat

end
