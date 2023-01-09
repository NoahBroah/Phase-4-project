class Project < ApplicationRecord
    belongs_to :user
    has_many :notes, dependent: :destroy
    has_many :users, through: :notes

   

   
end
