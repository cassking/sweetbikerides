class RouteReview < ApplicationRecord
  belongs_to :user
  has_many :route_review_categories
  has_many :categories, through: :route_review_categories
  has_many :media
  has_many :comments

  validates :user_id, presence: true
  validates :name, presence: true
  validates :description, presence: true
  validates :category, presence: true
  validates :map_start_latitude, presence: true
  validates :map_start_longitude, presence: true
  validates :map_end_latitude, presence: true
  validates :map_end_longitude, presence: true
end
