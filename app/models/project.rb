class Project < ApplicationRecord
    belongs_to :user
    has_many :notes, dependent: :destroy
    has_many :users, through: :notes
    validates :title, presence: true
    validates :description, presence: true
    validates :number_of_people, presence: true
end
