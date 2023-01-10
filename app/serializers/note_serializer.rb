class NoteSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user_id, :project_id, :user
  has_one :user
  has_one :project
end
