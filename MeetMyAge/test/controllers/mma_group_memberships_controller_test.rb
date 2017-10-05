require 'test_helper'

class MmaGroupMembershipsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @mma_group_membership = mma_group_memberships(:one)
  end

  test "should get index" do
    get mma_group_memberships_url
    assert_response :success
  end

  test "should get new" do
    get new_mma_group_membership_url
    assert_response :success
  end

  test "should create mma_group_membership" do
    assert_difference('MmaGroupMembership.count') do
      post mma_group_memberships_url, params: { mma_group_membership: { joined_on: @mma_group_membership.joined_on, last_login: @mma_group_membership.last_login, profile_id: @mma_group_membership.profile_id } }
    end

    assert_redirected_to mma_group_membership_url(MmaGroupMembership.last)
  end

  test "should show mma_group_membership" do
    get mma_group_membership_url(@mma_group_membership)
    assert_response :success
  end

  test "should get edit" do
    get edit_mma_group_membership_url(@mma_group_membership)
    assert_response :success
  end

  test "should update mma_group_membership" do
    patch mma_group_membership_url(@mma_group_membership), params: { mma_group_membership: { joined_on: @mma_group_membership.joined_on, last_login: @mma_group_membership.last_login, profile_id: @mma_group_membership.profile_id } }
    assert_redirected_to mma_group_membership_url(@mma_group_membership)
  end

  test "should destroy mma_group_membership" do
    assert_difference('MmaGroupMembership.count', -1) do
      delete mma_group_membership_url(@mma_group_membership)
    end

    assert_redirected_to mma_group_memberships_url
  end
end
