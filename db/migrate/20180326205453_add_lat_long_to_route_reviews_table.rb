class AddLatLongToRouteReviewsTable < ActiveRecord::Migration[5.1]
  def change
  add_column :route_reviews, :latitute, :float, null: :false
  add_column :route_reviews, :longitude, :float, null: :false
  end
end
