Rails.application.routes.draw do
  resources :coupons, only: [:create, :show, :destroy, :index]
  resources :stores, only: [:create, :show, :destroy, :index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
