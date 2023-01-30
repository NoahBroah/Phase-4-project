class Note < ApplicationRecord
    belongs_to :user
    belongs_to :project
    validates :comment, presence: true
end
