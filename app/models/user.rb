class User < ApplicationRecord
  has_many :route_reviews
  has_many :maps, through: :route_reviews
  has_many :categories, through: :route_reviews
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  validates :username, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
