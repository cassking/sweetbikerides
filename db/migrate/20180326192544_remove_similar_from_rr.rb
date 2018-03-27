class RemoveSimilarFromRr < ActiveRecord::Migration[5.1]
  def change
    remove_column :route_reviews, :similar_routes_id
  end
end
