require 'test_helper'

class MmaLocationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @mma_location = mma_locations(:one)
  end

  test "should get index" do
    get mma_locations_url
    assert_response :success
  end

  test "should get new" do
    get new_mma_location_url
    assert_response :success
  end

  test "should create mma_location" do
    assert_difference('MmaLocation.count') do
      post mma_locations_url, params: { mma_location: { city: @mma_location.city, latitude: @mma_location.latitude, longitude: @mma_location.longitude, state: @mma_location.state } }
    end

    assert_redirected_to mma_location_url(MmaLocation.last)
  end

  test "should show mma_location" do
    get mma_location_url(@mma_location)
    assert_response :success
  end

  test "should get edit" do
    get edit_mma_location_url(@mma_location)
    assert_response :success
  end

  test "should update mma_location" do
    patch mma_location_url(@mma_location), params: { mma_location: { city: @mma_location.city, latitude: @mma_location.latitude, longitude: @mma_location.longitude, state: @mma_location.state } }
    assert_redirected_to mma_location_url(@mma_location)
  end

  test "should destroy mma_location" do
    assert_difference('MmaLocation.count', -1) do
      delete mma_location_url(@mma_location)
    end

    assert_redirected_to mma_locations_url
  end
end
