class CreateMedia < ActiveRecord::Migration[5.1]
  def change
    create_table :media do |t|
      t.integer :route_review_id, null: false
      t.string :name, null: false
      t.string :location
      t.text :description
      t.string :date_taken
      t.timestamps
    end
  end
end
