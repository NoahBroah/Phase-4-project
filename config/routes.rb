Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  #Sessions Routes
post '/login', to: 'sessions#create'
delete '/logout', to: 'sessions#destroy'

# User Routes
post '/signup', to: 'users#create'




  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
