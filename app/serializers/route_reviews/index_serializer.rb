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
            :end_location
    #         :current_user_id
    #
    # def current_user_id
    #     object.session[:current_user_id]
    # end

end
