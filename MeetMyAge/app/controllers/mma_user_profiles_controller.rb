class MmaUserProfilesController < ApplicationController
  before_action :set_mma_user_profile, only: [:show, :edit, :update, :destroy]

  # GET /mma_user_profiles
  # GET /mma_user_profiles.json
  def index
    @mma_user_profiles = MmaUserProfile.all
  end

  # GET /mma_user_profiles/1
  # GET /mma_user_profiles/1.json
  def show
  end

  # GET /mma_user_profiles/new
  def new
    @mma_user_profile = MmaUserProfile.new
  end

  # GET /mma_user_profiles/1/edit
  def edit
  end

  # POST /mma_user_profiles
  # POST /mma_user_profiles.json
  def create
    @mma_user_profile = MmaUserProfile.new(mma_user_profile_params)

    respond_to do |format|
      if @mma_user_profile.save
        format.html { redirect_to @mma_user_profile, notice: 'Mma user profile was successfully created.' }
        format.json { render :show, status: :created, location: @mma_user_profile }
      else
        format.html { render :new }
        format.json { render json: @mma_user_profile.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /mma_user_profiles/1
  # PATCH/PUT /mma_user_profiles/1.json
  def update
    respond_to do |format|
      if @mma_user_profile.update(mma_user_profile_params)
        format.html { redirect_to @mma_user_profile, notice: 'Mma user profile was successfully updated.' }
        format.json { render :show, status: :ok, location: @mma_user_profile }
      else
        format.html { render :edit }
        format.json { render json: @mma_user_profile.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /mma_user_profiles/1
  # DELETE /mma_user_profiles/1.json
  def destroy
    @mma_user_profile.destroy
    respond_to do |format|
      format.html { redirect_to mma_user_profiles_url, notice: 'Mma user profile was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_mma_user_profile
      @mma_user_profile = MmaUserProfile.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def mma_user_profile_params
      params.require(:mma_user_profile).permit(:name, :about_me, :gender, :education, :work, :age, :mobile_number, :email, :is_mobile_verifed, :image, :user_type, :location_id, :auth_token)
    end
end
