class AddNullFalseToLatlng < ActiveRecord::Migration[5.1]
  def change
    change_column :route_reviews, :map_start_lng_lat, :float, array: true, default: [], null: false
    change_column :route_reviews, :map_end_lng_lat, :float, array: true, default: [], null: false
  end
end
