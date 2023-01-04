Rails.application.routes.draw do
  resources :notes
  resources :projects
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  #Sessions Routes
post '/login', to: 'sessions#create'
delete '/logout', to: 'sessions#destroy'

# User Routes
post '/signup', to: 'users#create'
get '/auth', to: 'users#show'
get '/users', to: 'users#index'



  # Defines the root path route ("/")
  # root "articles#index"
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
