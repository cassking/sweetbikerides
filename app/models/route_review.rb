class RouteReview < ApplicationRecord
  belongs_to :user
  has_many :route_review_categories
  has_many :categories, through: :route_review_categories
  has_many :media
  has_many :comments
end
