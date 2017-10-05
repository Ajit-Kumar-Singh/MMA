class CreateMmaUserProfiles < ActiveRecord::Migration[5.1]
  def change
    create_table :mma_user_profiles do |t|
      t.string :name
      t.string :about_me
      t.string :gender
      t.string :education
      t.string :work
      t.integer :age
      t.string :mobile_number
      t.string :email
      t.boolean :is_mobile_verifed
      t.string :image
      t.string :user_type
      t.integer :location_id
      t.string :auth_token

      t.timestamps
    end
  end
end
