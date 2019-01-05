class Api::CommentsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_comment, :only [:destroy]
  before_action :set_video

  def index 
    render json: @video.comment
    render json: Comment.all
  end

  def create
    comment = @video.comments.new(comment_params)
    if comment.save
      render json: comment
    else
      render json: comment.errors
    end
  end

  def destroy 
    @comment.destroy
  end

  private 
    def set_video 
      @video = Video.find(params[:video_id])
    end

    def set_comment 
      @comment = Comment.find(params[:id])
    end

    def comment_params 
      params.require(:comment).permit(:body)
    end
end
