class CreateMmaLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :mma_locations do |t|
      t.string :city
      t.string :state
      t.decimal :latitude
      t.decimal :longitude

      t.timestamps
    end
  end
end
