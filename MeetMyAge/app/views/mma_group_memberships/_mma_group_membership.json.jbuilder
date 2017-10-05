json.extract! mma_group_membership, :id, :profile_id, :joined_on, :last_login, :created_at, :updated_at
json.url mma_group_membership_url(mma_group_membership, format: :json)
