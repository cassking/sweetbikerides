Rails.application.routes.draw do
  resources :maps
  resources :comments
  resources :route_review_categories
  resources :categories
  resources :media
  resources :route_reviews
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
