Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users

  resources :route_review_categories, only: [:index]
  resources :categories, only: [:index]
  resources :media, only: [:index]
  namespace :api do
      namespace :v1 do
        resources :route_reviews, only: [:index, :show, :create, :destroy]
          resources :comments, only: [:index, :create, :destroy] do
        end
      end
    end
  get '*path', to: 'static_pages#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
