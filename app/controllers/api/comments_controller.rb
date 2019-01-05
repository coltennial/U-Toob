class Api::CommentsController < ApplicationController
  before_action :authenticate_user!
  # before_action :set_comment, :only [:destroy]

  def index 
    render json: Comment.all
  end

  # def destroy 
  #   @comment.destroy
  # end

  # private 
  
  #   def set_comment 
  #     @comment = Comment.find(params[:id])
  #   end

  #   def comment_params 

  #   end
end
