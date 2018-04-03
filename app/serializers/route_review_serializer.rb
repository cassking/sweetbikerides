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
            :map_start_latitude,
            :map_end_latitude,
            :map_start_longitude,
            :map_end_longitude,
            :coordinates
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
