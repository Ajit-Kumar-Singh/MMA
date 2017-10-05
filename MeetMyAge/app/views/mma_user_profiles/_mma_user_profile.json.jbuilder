json.extract! mma_user_profile, :id, :name, :about_me, :gender, :education, :work, :age, :mobile_number, :email, :is_mobile_verifed, :image, :user_type, :location_id, :auth_token, :created_at, :updated_at
json.url mma_user_profile_url(mma_user_profile, format: :json)
