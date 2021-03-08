class PostsController < ApplicationController
  before_action :set_profile
  before_action :set_post, only: [ :show, :edit, :update, :destroy ]

  def index
    @posts = @profile.posts
    render component: 'Posts', props: { profile: @profile, posts: @posts }
  end

  def show
  end

  def new
  end

  def edit
  end

  private
  def post_params
    params.require(:post).permit(:body)
  end

  def set_profile
    @profile = Profile.find(params[:profile_id])
  end

  def set_post
    @post = @profile.posts.find(params[:id])
  end
end
