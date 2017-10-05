require 'test_helper'

class MmaGroupsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @mma_group = mma_groups(:one)
  end

  test "should get index" do
    get mma_groups_url
    assert_response :success
  end

  test "should get new" do
    get new_mma_group_url
    assert_response :success
  end

  test "should create mma_group" do
    assert_difference('MmaGroup.count') do
      post mma_groups_url, params: { mma_group: { description: @mma_group.description, group_size: @mma_group.group_size, group_type: @mma_group.group_type, icon: @mma_group.icon, images: @mma_group.images, interests: @mma_group.interests, name: @mma_group.name } }
    end

    assert_redirected_to mma_group_url(MmaGroup.last)
  end

  test "should show mma_group" do
    get mma_group_url(@mma_group)
    assert_response :success
  end

  test "should get edit" do
    get edit_mma_group_url(@mma_group)
    assert_response :success
  end

  test "should update mma_group" do
    patch mma_group_url(@mma_group), params: { mma_group: { description: @mma_group.description, group_size: @mma_group.group_size, group_type: @mma_group.group_type, icon: @mma_group.icon, images: @mma_group.images, interests: @mma_group.interests, name: @mma_group.name } }
    assert_redirected_to mma_group_url(@mma_group)
  end

  test "should destroy mma_group" do
    assert_difference('MmaGroup.count', -1) do
      delete mma_group_url(@mma_group)
    end

    assert_redirected_to mma_groups_url
  end
end
