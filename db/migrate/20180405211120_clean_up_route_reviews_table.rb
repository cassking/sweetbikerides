class CleanUpRouteReviewsTable < ActiveRecord::Migration[5.1]
  def change
    remove_column :route_reviews, :coordinates
    remove_column :route_reviews, :map_start_latitude
    remove_column :route_reviews, :map_start_longitude
    remove_column :route_reviews, :map_end_latitude
    remove_column :route_reviews, :map_end_longitude
  end
end
