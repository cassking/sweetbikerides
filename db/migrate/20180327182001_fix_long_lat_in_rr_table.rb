class FixLongLatInRrTable < ActiveRecord::Migration[5.1]
  def change
    add_column :route_reviews, :map_start_latitude, :float
    add_column :route_reviews, :map_start_longitude, :float
    add_column :route_reviews, :map_end_latitude, :float
    add_column :route_reviews, :map_end_longitude, :float
  end
end
