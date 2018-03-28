class RemoveCoordinatesAddEndStartLatLongToRreviews < ActiveRecord::Migration[5.1]
  def chang
    remove_column :route_reviews, :coordinates
  end
end
