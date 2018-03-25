class CreateRouteReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :route_reviews do |t|
      t.integer :route_review_id, null: false
      t.string :name, null: false
      t.string :description, null: false
      t.string :category, null: false
      t.string :weatherconditions
      t.integer :mileage
      t.text :points_interest
      t.string :start_location
      t.string :end_location
      t.integer :similar_routes_id
      t.timestamps
    end
  end
end
