Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'profiles#index'

  resources :profiles do
    resources :posts
  end

  resources :posts do
    resources :comments
  end
end
