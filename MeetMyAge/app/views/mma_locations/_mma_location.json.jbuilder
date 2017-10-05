json.extract! mma_location, :id, :city, :state, :latitude, :longitude, :created_at, :updated_at
json.url mma_location_url(mma_location, format: :json)
