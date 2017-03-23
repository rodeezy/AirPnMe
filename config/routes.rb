Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :spots, only: [:index, :show, :create]
    resources :reviews, only: [:create]
    resource :user, only: [:create] do
      resources :bookings, only: [:index]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :bookings, only: [:create, :destroy]
  end

  root "static_pages#root"
end
