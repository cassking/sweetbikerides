class FixUsersRouteReviewsTable < ActiveRecord::Migration[5.1]
  def change
    add_column :route_reviews, :coordinates, :float, array: true, default: []
    remove_column :users, :coordinates

  end
end
