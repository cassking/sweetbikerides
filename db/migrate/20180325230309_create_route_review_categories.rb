class CreateRouteReviewCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :route_review_categories do |t|
      t.integer :category_id, null: false
      t.integer :route_review_id, null: false
      t.timestamps
    end
  end
end
