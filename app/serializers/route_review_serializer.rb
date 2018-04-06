class RouteReviewSerializer < ActiveModel::Serializer
  attributes :id,
            :name,
            :description,
            :category,
            :mileage,
            :start_location,
            :end_location,
            :user,
            :user_id,
            :username,
            :signed_in,
            :map_start_lng_lat,
            :map_end_lng_lat
def username
  object.user.username
end

def signed_in
  true if current_user
end

def user
  object.user
end

end
