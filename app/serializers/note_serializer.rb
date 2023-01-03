class NoteSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user_id, :project_id
end
