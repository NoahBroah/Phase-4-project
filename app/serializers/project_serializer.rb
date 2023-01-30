class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :number_of_people
  has_many :users
  has_many :notes
end
