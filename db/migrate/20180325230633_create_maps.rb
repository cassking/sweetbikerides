class CreateMaps < ActiveRecord::Migration[5.1]
  def change
    create_table :maps do |t|
      t.integer :route_review_id, null: false
      t.string :name, null: false
      t.text :description, null: false
      t.timestamps
    end
  end
end
