Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users

  resources :dashboard, only: [:index, :edit]
    match 'users/:id' => 'dashboard#destroy', :via => :delete, :as => :admin_destroy_user



  resources :route_review_categories, only: [:index]
  resources :categories, only: [:index]
  resources :media, only: [:index]
  namespace :api do
      namespace :v1 do
        resources :route_reviews, only: [:index, :show, :create, :destroy] do
          resources :comments, only: [:index, :show, :create, :destroy] 
        end
      end
    end
  get '*path', to: 'static_pages#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
