Rails.application.routes.draw do
  resources :mma_group_memberships
  resources :mma_groups
  resources :mma_locations
  resources :mma_interests
  resources :mma_user_profiles
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root 'application#hello'
end
