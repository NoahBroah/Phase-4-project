class SubcscriptionSerializer < ActiveModel::Serializer
  attributes :id, :is_member, :user_id, :project_id
end
