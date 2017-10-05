json.extract! mma_group, :id, :name, :description, :group_type, :icon, :group_size, :interests, :images, :created_at, :updated_at
json.url mma_group_url(mma_group, format: :json)
