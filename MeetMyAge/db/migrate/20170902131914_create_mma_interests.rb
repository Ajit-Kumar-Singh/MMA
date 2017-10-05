class CreateMmaInterests < ActiveRecord::Migration[5.1]
  def change
    create_table :mma_interests do |t|
      t.string :name
      t.string :description
      t.boolean :is_enabled

      t.timestamps
    end
  end
end
