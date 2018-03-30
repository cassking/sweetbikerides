class ChangeMileageFromIntegerTofloat < ActiveRecord::Migration[5.1]
  def change
    change_column :route_reviews, :mileage, :float, :default => 0
    change_column :route_reviews, :category, :string, :default => "Asphalt"
    add_column :route_reviews, :difficulty, :string, :default => "Flat"

  end
end
