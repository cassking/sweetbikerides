class Comment < ApplicationRecord
  belongs_to :route_review

  validates :user_id, presence: true
  validates :route_review_id, presence: true
  validates :body, presence: true
end
