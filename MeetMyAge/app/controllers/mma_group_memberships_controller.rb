class MmaGroupMembershipsController < ApplicationController
  before_action :set_mma_group_membership, only: [:show, :edit, :update, :destroy]

  # GET /mma_group_memberships
  # GET /mma_group_memberships.json
  def index
    @mma_group_memberships = MmaGroupMembership.all
  end

  # GET /mma_group_memberships/1
  # GET /mma_group_memberships/1.json
  def show
  end

  # GET /mma_group_memberships/new
  def new
    @mma_group_membership = MmaGroupMembership.new
  end

  # GET /mma_group_memberships/1/edit
  def edit
  end

  # POST /mma_group_memberships
  # POST /mma_group_memberships.json
  def create
    @mma_group_membership = MmaGroupMembership.new(mma_group_membership_params)

    respond_to do |format|
      if @mma_group_membership.save
        format.html { redirect_to @mma_group_membership, notice: 'Mma group membership was successfully created.' }
        format.json { render :show, status: :created, location: @mma_group_membership }
      else
        format.html { render :new }
        format.json { render json: @mma_group_membership.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /mma_group_memberships/1
  # PATCH/PUT /mma_group_memberships/1.json
  def update
    respond_to do |format|
      if @mma_group_membership.update(mma_group_membership_params)
        format.html { redirect_to @mma_group_membership, notice: 'Mma group membership was successfully updated.' }
        format.json { render :show, status: :ok, location: @mma_group_membership }
      else
        format.html { render :edit }
        format.json { render json: @mma_group_membership.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /mma_group_memberships/1
  # DELETE /mma_group_memberships/1.json
  def destroy
    @mma_group_membership.destroy
    respond_to do |format|
      format.html { redirect_to mma_group_memberships_url, notice: 'Mma group membership was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_mma_group_membership
      @mma_group_membership = MmaGroupMembership.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def mma_group_membership_params
      params.require(:mma_group_membership).permit(:profile_id, :joined_on, :last_login)
    end
end
