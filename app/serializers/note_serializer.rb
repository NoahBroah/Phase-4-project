class NoteSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user_id, :user, :project_id, :project
  has_one :user
  has_one :project
end
