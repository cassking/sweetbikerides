class Category < ApplicationRecord
  has_many :route_review_categories
  has_many :route_reviews, through: :route_review_categories
end
