class ChangeColumnNameLatitude < ActiveRecord::Migration[5.1]
  def change
    remove_column :route_reviews, :latitute
    remove_column :route_reviews, :longitude
    add_column :users, :coordinates, :float, array: true, default: []
    
  end
end
