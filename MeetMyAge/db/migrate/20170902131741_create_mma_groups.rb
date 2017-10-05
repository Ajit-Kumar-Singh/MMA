class CreateMmaGroups < ActiveRecord::Migration[5.1]
  def change
    create_table :mma_groups do |t|
      t.string :name
      t.string :description
      t.string :group_type
      t.integer :icon
      t.string :group_size
      t.string :interests
      t.string :images

      t.timestamps
    end
  end
end
