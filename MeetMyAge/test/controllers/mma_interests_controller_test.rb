require 'test_helper'

class MmaInterestsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @mma_interest = mma_interests(:one)
  end

  test "should get index" do
    get mma_interests_url
    assert_response :success
  end

  test "should get new" do
    get new_mma_interest_url
    assert_response :success
  end

  test "should create mma_interest" do
    assert_difference('MmaInterest.count') do
      post mma_interests_url, params: { mma_interest: { description: @mma_interest.description, is_enabled: @mma_interest.is_enabled, name: @mma_interest.name } }
    end

    assert_redirected_to mma_interest_url(MmaInterest.last)
  end

  test "should show mma_interest" do
    get mma_interest_url(@mma_interest)
    assert_response :success
  end

  test "should get edit" do
    get edit_mma_interest_url(@mma_interest)
    assert_response :success
  end

  test "should update mma_interest" do
    patch mma_interest_url(@mma_interest), params: { mma_interest: { description: @mma_interest.description, is_enabled: @mma_interest.is_enabled, name: @mma_interest.name } }
    assert_redirected_to mma_interest_url(@mma_interest)
  end

  test "should destroy mma_interest" do
    assert_difference('MmaInterest.count', -1) do
      delete mma_interest_url(@mma_interest)
    end

    assert_redirected_to mma_interests_url
  end
end
