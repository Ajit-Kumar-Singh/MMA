require 'test_helper'

class MmaUserProfilesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @mma_user_profile = mma_user_profiles(:one)
  end

  test "should get index" do
    get mma_user_profiles_url
    assert_response :success
  end

  test "should get new" do
    get new_mma_user_profile_url
    assert_response :success
  end

  test "should create mma_user_profile" do
    assert_difference('MmaUserProfile.count') do
      post mma_user_profiles_url, params: { mma_user_profile: { about_me: @mma_user_profile.about_me, age: @mma_user_profile.age, auth_token: @mma_user_profile.auth_token, education: @mma_user_profile.education, email: @mma_user_profile.email, gender: @mma_user_profile.gender, image: @mma_user_profile.image, is_mobile_verifed: @mma_user_profile.is_mobile_verifed, location_id: @mma_user_profile.location_id, mobile_number: @mma_user_profile.mobile_number, name: @mma_user_profile.name, user_type: @mma_user_profile.user_type, work: @mma_user_profile.work } }
    end

    assert_redirected_to mma_user_profile_url(MmaUserProfile.last)
  end

  test "should show mma_user_profile" do
    get mma_user_profile_url(@mma_user_profile)
    assert_response :success
  end

  test "should get edit" do
    get edit_mma_user_profile_url(@mma_user_profile)
    assert_response :success
  end

  test "should update mma_user_profile" do
    patch mma_user_profile_url(@mma_user_profile), params: { mma_user_profile: { about_me: @mma_user_profile.about_me, age: @mma_user_profile.age, auth_token: @mma_user_profile.auth_token, education: @mma_user_profile.education, email: @mma_user_profile.email, gender: @mma_user_profile.gender, image: @mma_user_profile.image, is_mobile_verifed: @mma_user_profile.is_mobile_verifed, location_id: @mma_user_profile.location_id, mobile_number: @mma_user_profile.mobile_number, name: @mma_user_profile.name, user_type: @mma_user_profile.user_type, work: @mma_user_profile.work } }
    assert_redirected_to mma_user_profile_url(@mma_user_profile)
  end

  test "should destroy mma_user_profile" do
    assert_difference('MmaUserProfile.count', -1) do
      delete mma_user_profile_url(@mma_user_profile)
    end

    assert_redirected_to mma_user_profiles_url
  end
end
