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
            :end_location,
            :difficulty,
            :user_id,
            :username,

            :bio,
            :location
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
