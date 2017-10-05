class MmaInterestsController < ApplicationController
  before_action :set_mma_interest, only: [:show, :edit, :update, :destroy]

  # GET /mma_interests
  # GET /mma_interests.json
  def index
    @mma_interests = MmaInterest.all
  end

  # GET /mma_interests/1
  # GET /mma_interests/1.json
  def show
  end

  # GET /mma_interests/new
  def new
    @mma_interest = MmaInterest.new
  end

  # GET /mma_interests/1/edit
  def edit
  end

  # POST /mma_interests
  # POST /mma_interests.json
  def create
    @mma_interest = MmaInterest.new(mma_interest_params)

    respond_to do |format|
      if @mma_interest.save
        format.html { redirect_to @mma_interest, notice: 'Mma interest was successfully created.' }
        format.json { render :show, status: :created, location: @mma_interest }
      else
        format.html { render :new }
        format.json { render json: @mma_interest.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /mma_interests/1
  # PATCH/PUT /mma_interests/1.json
  def update
    respond_to do |format|
      if @mma_interest.update(mma_interest_params)
        format.html { redirect_to @mma_interest, notice: 'Mma interest was successfully updated.' }
        format.json { render :show, status: :ok, location: @mma_interest }
      else
        format.html { render :edit }
        format.json { render json: @mma_interest.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /mma_interests/1
  # DELETE /mma_interests/1.json
  def destroy
    @mma_interest.destroy
    respond_to do |format|
      format.html { redirect_to mma_interests_url, notice: 'Mma interest was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_mma_interest
      @mma_interest = MmaInterest.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def mma_interest_params
      params.require(:mma_interest).permit(:name, :description, :is_enabled)
    end
end
