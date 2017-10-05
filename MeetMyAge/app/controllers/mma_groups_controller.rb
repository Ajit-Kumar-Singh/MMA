class MmaGroupsController < ApplicationController
  before_action :set_mma_group, only: [:show, :edit, :update, :destroy]

  # GET /mma_groups
  # GET /mma_groups.json
  def index
    @mma_groups = MmaGroup.all
  end

  # GET /mma_groups/1
  # GET /mma_groups/1.json
  def show
  end

  # GET /mma_groups/new
  def new
    @mma_group = MmaGroup.new
  end

  # GET /mma_groups/1/edit
  def edit
  end

  # POST /mma_groups
  # POST /mma_groups.json
  def create
    @mma_group = MmaGroup.new(mma_group_params)

    respond_to do |format|
      if @mma_group.save
        format.html { redirect_to @mma_group, notice: 'Mma group was successfully created.' }
        format.json { render :show, status: :created, location: @mma_group }
      else
        format.html { render :new }
        format.json { render json: @mma_group.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /mma_groups/1
  # PATCH/PUT /mma_groups/1.json
  def update
    respond_to do |format|
      if @mma_group.update(mma_group_params)
        format.html { redirect_to @mma_group, notice: 'Mma group was successfully updated.' }
        format.json { render :show, status: :ok, location: @mma_group }
      else
        format.html { render :edit }
        format.json { render json: @mma_group.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /mma_groups/1
  # DELETE /mma_groups/1.json
  def destroy
    @mma_group.destroy
    respond_to do |format|
      format.html { redirect_to mma_groups_url, notice: 'Mma group was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_mma_group
      @mma_group = MmaGroup.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def mma_group_params
      params.require(:mma_group).permit(:name, :description, :group_type, :icon, :group_size, :interests, :images)
    end
end
