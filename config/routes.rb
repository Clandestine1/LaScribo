Rails.application.routes.draw do
  get 'about/about'

  devise_for :users, :controllers => { registrations: 'registrations' }  
  root 'posts#index'
  resources :posts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end