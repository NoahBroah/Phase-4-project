class Project < ApplicationRecord
    # belongs_to :user
    has_many :notes, dependent: :destroy
    has_many :users, -> { distinct }, through: :notes
    validates :title, presence: true, length: { minimum: 2}
    validates :description, presence: true, length: { minimum: 2}
    validates :number_of_people, presence: true
end
