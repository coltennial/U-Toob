Rails.application.routes.draw do
  namespace :api do
    resources :videos, only: :index do 
      resources :comments, only: :index
    end
  end
end
