class MmaLocationsController < ApplicationController
  before_action :set_mma_location, only: [:show, :edit, :update, :destroy]

  # GET /mma_locations
  # GET /mma_locations.json
  def index
    @mma_locations = MmaLocation.all
  end

  # GET /mma_locations/1
  # GET /mma_locations/1.json
  def show
  end

  # GET /mma_locations/new
  def new
    @mma_location = MmaLocation.new
  end

  # GET /mma_locations/1/edit
  def edit
  end

  # POST /mma_locations
  # POST /mma_locations.json
  def create
    @mma_location = MmaLocation.new(mma_location_params)

    respond_to do |format|
      if @mma_location.save
        format.html { redirect_to @mma_location, notice: 'Mma location was successfully created.' }
        format.json { render :show, status: :created, location: @mma_location }
      else
        format.html { render :new }
        format.json { render json: @mma_location.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /mma_locations/1
  # PATCH/PUT /mma_locations/1.json
  def update
    respond_to do |format|
      if @mma_location.update(mma_location_params)
        format.html { redirect_to @mma_location, notice: 'Mma location was successfully updated.' }
        format.json { render :show, status: :ok, location: @mma_location }
      else
        format.html { render :edit }
        format.json { render json: @mma_location.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /mma_locations/1
  # DELETE /mma_locations/1.json
  def destroy
    @mma_location.destroy
    respond_to do |format|
      format.html { redirect_to mma_locations_url, notice: 'Mma location was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_mma_location
      @mma_location = MmaLocation.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def mma_location_params
      params.require(:mma_location).permit(:city, :state, :latitude, :longitude)
    end
end
