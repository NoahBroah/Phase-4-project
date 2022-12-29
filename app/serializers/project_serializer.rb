class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :number_of_people, :user_id
end
