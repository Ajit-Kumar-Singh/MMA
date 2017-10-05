class CreateMmaGroupMemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :mma_group_memberships do |t|
      t.integer :profile_id
      t.date :joined_on
      t.timestamp :last_login

      t.timestamps
    end
  end
end
