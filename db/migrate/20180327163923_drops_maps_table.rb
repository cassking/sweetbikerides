class DropsMapsTable < ActiveRecord::Migration[5.1]
  def change
    drop_table :maps
  end
end
