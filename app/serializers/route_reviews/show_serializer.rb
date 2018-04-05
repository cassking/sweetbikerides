class RouteReviews::ShowSerializer < RouteReviewSerializer
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
            :user_id,
            :username,
            :bio,
            :location,
            :map_start_lng_lat,
            :map_end_lng_lat
  def username
    object.user.username
  end
  def bio
    object.user.bio
  end
  def location
    object.user.location
  end

  has_many :comments, serializer: Comments::IndexSerializer
  has_one :category
end
