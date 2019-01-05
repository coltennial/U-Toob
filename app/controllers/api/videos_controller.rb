class Api::VideosController < ApplicationController
  before_action :authenticate_user!
  before_action :set_video, only: [:show, :destroy]

  def index 
    render json: Video.all
  end 

  def show 
    render json: @video
  end

  def create 
    video = Video.new(video_params)
    if video.save 
      render json: video 
    else 
      render json: video.errors
    end
  end

  def destroy 
    @video.destroy 
  end

  private 

  def set_video 
    @video = Video.find(params[:id])
  end

  def video_params 
    params.require(params[:id])
  end
end
