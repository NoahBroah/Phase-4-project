class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :number_of_people, :creator, :user_id
end
