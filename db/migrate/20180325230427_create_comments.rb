class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.integer :rating, default: 1
      t.integer :route_review_id, null: false
      t.text :body, null: false
      t.timestamps
    end
  end
end
