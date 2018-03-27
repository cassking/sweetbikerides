class ChangeColumnNameRouteReviews < ActiveRecord::Migration[5.1]
  def change
    rename_column :route_reviews, :route_review_id, :user_id

  end
end
