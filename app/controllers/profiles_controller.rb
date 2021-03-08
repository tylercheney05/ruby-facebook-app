class ProfilesController < ApplicationController
  def index
    @profiles = Profile.all
    render component: 'Profiles', props: { profiles: @profiles }
  end

  def show
    @profile = Profile.find(params[:id])
    render component: 'Profile', props: { profile: @profile }
  end

  def new
    @profile = Profile.new
    render component: 'ProfileNew', props: { profile: @profile }
  end

  def create
    @profile = Profile.new(profile_params)
    if @profile.save
      redirect_to profiles_path
    else
      render component: 'ProfileNew', props: { profile: @profile }
    end
  end

  def edit
    @profile = Profile.find(params[:id])
    render component: 'ProfileEdit', props: { profile: @profile }
  end

  def update
    @profile = Profile.find(params[:id])
    if @profile.update(profile_params)
      redirect_to profiles_path
    else
      render component: 'ProfileEdit', props: { profile: @profile }
    end
  end

  def destroy
    @profile = Profile.find(params[:id])
    @profile.destroy
    redirect_to profiles_path
  end

  private
  def profile_params
    params.require(:profile).permit(:name, :email, :phone)
  end
end
