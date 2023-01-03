class Project < ApplicationRecord
    belongs_to :user
    has_many :subscriptions, dependent: :destroy
    has_many :users, through: :subscriptions, dependent: :destroy

   

   
end
